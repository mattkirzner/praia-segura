import React, { useEffect, useState } from 'react';
import './AreaDeRisco.css'; 
import background from '../imgs/background-area-de-risco.png';
import mapa1 from '../imgs/mapa-1.png';
import mapa2 from '../imgs/mapa-2.png';
import mapa3 from '../imgs/mapa-3.png';

function AreaDeRisco() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation(`https://www.google.com/maps?q=${latitude},${longitude}`);
      },
      (error) => {
        console.error('Erro ao obter localização:', error);
      }
    );
  }, []);

  const tituloMapa1 = `PRAIA DE BOA VIAGEM:`;
  const textoMapa1 = `Aconselhado o banho de mar apenas na maré-baixa e em áreas de arrecifes`;

  const tituloMapa2 = `PRAIA DE PIEDADE (IGREJINHA) - HOTEL BARRAMARES:`;
  const textoMapa2 = `Banho de mar proibido no trecho`;

  const tituloMapa3 = `PRAIA DO PAIVA - PRAIA DE ITAPUAMA:`; 
  const textoMapa3 = `Aconselhado o banho de mar apenas na maré baixa e em áreas de arrecifes`;

  return (
    <div className="areaDeRisco-container" style={{ backgroundImage: `url(${background})` }}>
      

      {userLocation && (
        <a
          href={userLocation}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          📍VOCÊ ESTÁ AQUI!
        </a>
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
