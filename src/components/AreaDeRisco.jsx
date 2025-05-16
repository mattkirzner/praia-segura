import React, { useEffect, useState } from 'react';
import { useLanguageContext } from './Context';
import './AreaDeRisco.css'; 
import background from '../imgs/background-area-de-risco.png';
import mapa1 from '../imgs/mapa-1.png';
import mapa2 from '../imgs/mapa-2.png';
import mapa3 from '../imgs/mapa-3.png';

function AreaDeRisco() {
  const [userLocation, setUserLocation] = useState(null);
  const {data}=useLanguageContext();

  let errorMsg = "";
  let vcEstaAqui = "";
  let tituloMapa1 = ``;
  let textoMapa1 = ``;
  let tituloMapa2 = ``;
  let textoMapa2 = ``;
  let tituloMapa3 = ``; 
  let textoMapa3 = ``;

  if (data.lang == "br"){
    errorMsg = "Erro ao obter localização:"
    vcEstaAqui ="VOCÊ ESTÁ AQUI!"
    tituloMapa1 = `PRAIA DE BOA VIAGEM:`;
    textoMapa1 = `Aconselhado o banho de mar apenas na maré-baixa e em áreas de arrecifes.`;
    tituloMapa2 = `PRAIA DE PIEDADE (IGREJINHA) - HOTEL BARRAMARES:`;
    textoMapa2 = `Banho de mar proibido no trecho.`;
    tituloMapa3 = `PRAIA DO PAIVA - PRAIA DE ITAPUAMA:`; 
    textoMapa3 = `Aconselhado o banho de mar apenas na maré baixa e em áreas de arrecifes.`;
  }

  if (data.lang == "us"){
    errorMsg = "Error finding location:"
    vcEstaAqui ="YOU ARE HERE!"
    tituloMapa1 = `BOA VIAGEM BEACH:`;
    textoMapa1 = `Entering the sea recommended during low tide & in areas with rock reefs.`;
    tituloMapa2 = `PIEDADE BEACH(LITTLE CHURCH) - HOTEL BARRAMARES:`;
    textoMapa2 = `Entering the sea forbidden in this area.`;
    tituloMapa3 = `PAIVA BEACH- PRAIA BEACH:`; 
    textoMapa3 = `Entering the sea recommended during low tide & in areas with rock reefs.`;
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({latitude , longitude});
      },
      (error) => {
        console.error(errorMsg, error);
      }
    );
  }, [errorMsg]);


  
  return (
    <div className="areaDeRisco-container" style={{ backgroundImage: `url(${background})` }}>
      
      {userLocation && (
  <div className="map-container">
    <h2 className="texto" style={{ fontSize: '28px', textAlign: 'center' }}>{vcEstaAqui}</h2>
    <iframe
      title="Sua localização"
      src={`https://maps.google.com/maps?q=${userLocation.latitude},${userLocation.longitude}&z=15&output=embed&markers=color:red%7C${userLocation.latitude},${userLocation.longitude}`}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
)}

      <div className="container">
        <img src={mapa1} alt="PRAIA DE BOA VIAGEM" className="imagem" />
        <div className="contatos-box">
          <h1 className="texto">{tituloMapa1}</h1>
          <h3 className="texto">{textoMapa1}</h3>
        </div>
      </div>

      <div className="container">
        <img src={mapa2} alt="PRAIA DE PIEDADE (IGREJINHA)" className="imagem" />
        <div className="contatos-box">
          <h1 className="texto">{tituloMapa2}</h1>
          <h3 className="texto">{textoMapa2}</h3>
        </div>
      </div>

      <div className="container">
        <img src={mapa3} alt="PRAIA DO PAIVA" className="imagem" />
        <div className="contatos-box">
          <h1 className="texto">{tituloMapa3}</h1>
          <h3 className="texto">{textoMapa3}</h3>
        </div>
      </div>
    </div>
  );
}

export default AreaDeRisco;
