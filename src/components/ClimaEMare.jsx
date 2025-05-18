import React, { useEffect, useState } from 'react';
import './ClimaEMare.css';
import background from '../imgs/background-clima-e-mare.png';
import axios from 'axios';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useLanguageContext } from './Context';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const textos = {
  br: {
    climaEm: "Clima em",
    condicao: "Condição",
    temperatura: "Temperatura",
    vento: "Vento",
    previsaoMare: "Previsão da Maré",
    graficoMare: "Gráfico da Maré (próximas horas)",
    carregandoClima: "Carregando clima...",
    carregandoMare: "Carregando dados da maré...",
    titulo: "Clima e Maré - Litoral de Pernambuco",
    alturaMare: "Altura da Maré (m)",
    nivel: "Nível",
    indisponivel: "Indisponível",
  },
  us: {
    climaEm: "Weather in",
    condicao: "Condition",
    temperatura: "Temperature",
    vento: "Wind",
    previsaoMare: "Tide Forecast",
    graficoMare: "Tide Chart (next hours)",
    carregandoClima: "Loading weather...",
    carregandoMare: "Loading tide data...",
    titulo: "Weather and Tide - Coast of Pernambuco",
    alturaMare: "Tide Height (m)",
    nivel: "Level",
    indisponivel: "Indisponível",
  },
};

const cidades = {
  'Litoral Norte': {
    'Carne de Vaca': { nome: 'Carne de Vaca', lat: -7.4909, lon: -34.8283 },
    'Ponta de Pedras': { nome: 'Ponta de Pedras', lat: -7.6320, lon: -34.8262 },
    'Goiana': { nome: 'Goiana', lat: -7.5590, lon: -35.0005 },
    'Itamaracá': { nome: 'Itamaracá', lat: -7.7439, lon: -34.8239 },
    'Maria Farinha': { nome: 'Maria Farinha', lat: -7.8243, lon: -34.8334 },
  },
  'Litoral Centro': {
    'Olinda': { nome: 'Olinda', lat: -7.9986, lon: -34.8450 },
    'Recife (Boa Viagem)': { nome: 'Recife', lat: -8.1696, lon: -34.9156 },
    'Piedade': { nome: 'Piedade', lat: -8.1804, lon: -34.9231 },
    'Candeias': { nome: 'Candeias', lat: -8.2012, lon: -34.9293 },
    'Paiva': { nome: 'Paiva', lat: -8.2721, lon: -34.9578 },
    'Itapuama': { nome: 'Itapuama', lat: -8.3078, lon: -34.9649 },
  },
  'Litoral Sul': {
    'Porto de Galinhas': { nome: 'Ipojuca', lat: -8.5090, lon: -35.0059 },
    'Muro Alto': { nome: 'Muro Alto', lat: -8.4445, lon: -35.0039 },
    'Praia do Cupe': { nome: 'Praia do Cupe', lat: -8.4350, lon: -35.0016 },
    'Tamandaré': { nome: 'Tamandaré', lat: -8.7565, lon: -35.1038 },
  }
};

function ClimaEMare() {
  const [cidadeSelecionada, setCidadeSelecionada] = useState('Recife (Boa Viagem)');
  const [tempo, setTempo] = useState(null);
  const [mare, setMare] = useState(null);
  const {data}=useLanguageContext();
  
  const now = Math.floor(Date.now() / 1000); // timestamp atual
  const hoursAhead = 12; // número de horas no futuro
  const lengthInSeconds = hoursAhead * 3600;

  let langKey = ""
  if(data.lang=="br"){
    langKey="pt_br";
  }  
  if(data.lang=="us"){
    langKey="en";
  }  


  const openWeatherKey = '0a5aaffe8af03e61fe5d3dee4255a10d'; 
  const worldTidesKey = '9e7009a6-cdff-4d2e-8297-544b02b3a6be';   

  const { nome, lat, lon } = Object.values(cidades)
    .flatMap(regiao => Object.entries(regiao))
    .find(([nomeCidade]) => nomeCidade === cidadeSelecionada)?.[1] || {};

  useEffect(() => {
    setTempo(null);
    setMare(null);

    if (lat && lon) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherKey}&units=metric&lang=${langKey}`)
        .then(response => setTempo(response.data))
        .catch(error => console.error('Erro ao buscar clima:', error));

      axios
        .get(`https://www.worldtides.info/api/v3?heights&lat=${lat}&lon=${lon}&key=${worldTidesKey}&start=${now}&length=${lengthInSeconds}`)
        .then(response => setMare(response.data))
        .catch(error => console.error('Erro ao buscar maré:', error));
    }
  }, [cidadeSelecionada, lat, lon, langKey, now, lengthInSeconds]);

  return (
    <div
      className="climaEMare-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="climaEMare-card">
        <h1>{textos[data.lang].titulo}</h1>

        <select value={cidadeSelecionada} onChange={e => setCidadeSelecionada(e.target.value)}>
          {Object.entries(cidades).map(([regiao, listaCidades]) => (
            <optgroup label={regiao} key={regiao}>
              {Object.keys(listaCidades).map(nomeCidade => (
                <option key={nomeCidade} value={nomeCidade}>{nomeCidade}</option>
              ))}
            </optgroup>
          ))}
        </select>

        <div style={{ marginTop: '1rem' }}>
          {tempo ? (
            <div>
              <h2>{textos[data.lang].climaEm} {cidadeSelecionada}:</h2>
              <h3>{textos[data.lang].condicao}: {tempo.weather?.[0]?.description || textos[data.lang].indisponivel}</h3>
              <h3>{textos[data.lang].temperatura}: {tempo.main?.temp ?? '--'}°C</h3>
              <h3>{textos[data.lang].vento}: {tempo.wind?.speed ?? '--'} m/s</h3>
            </div>
          ) : (
            <p>{textos[data.lang].carregandoClima}</p>
          )}

          {mare ? (
            <div>
              <h2>{textos[data.lang].previsaoMare}:</h2>
              <ul className="lista-mare">
                {mare.heights?.slice(0, 5).map((item, index) => (
                  <li key={index}>
                    {new Date(item.dt * 1000).toLocaleString("pt-BR")} - {textos[data.lang].nivel}: {item.height.toFixed(2)} m
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>{textos[data.lang].carregandoMare}</p>
          )}
          {mare?.heights?.length > 0 && (
            <div style={{ marginTop: '2rem' }}>
              <h2>{textos[data.lang].graficoMare}:</h2>
                <Line
                  data={{
                      labels: mare.heights.slice(0, 10).map(h =>
                      new Date(h.dt * 1000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
                      ),
                      datasets: [{
                      label: textos[data.lang].alturaMare,
                      data: mare.heights.slice(0, 10).map(h => h.height),
                      borderColor: '#3b82f6',
                      backgroundColor: 'rgba(59,130,246,0.2)',
                      tension: 0.4,
                      fill: true,
                      }]
                    }}
                  options={{
                    scales: {
                    y: {
                    beginAtZero: true
                    }
                    },
                    responsive: true,
                    plugins: {
                    legend: {
                    display: false
                    }
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClimaEMare;
