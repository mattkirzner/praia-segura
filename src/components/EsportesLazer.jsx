import React from 'react';
import InfoUtil from '../components/InfoUtil'; 
import lazerImagem from '../imgs/esportelazer.jpg'; 
import './EsportesLazer.css'; 
import { useLanguageContext } from './Context';

function EsportesLazer() {
  const {data}=useLanguageContext();
  if(data.lang=="br"){
    return (
      <div className="pagina-esportes-lazer">
        <h1>Esportes e Lazer</h1>
        <div className='conteudo'>
        <img src={lazerImagem} alt="Pessoas jogando vôlei de praia" id='imagem'/>
        <p className='texto'>A prática de surf é proibida na Região Metropolitana do Recife há mais de trinta anos, por razões de segurança. 
          Entretanto, muitas outras práticas esportivas podem ser desenvolvidas nas regiões de praia, como vôlei de praia, futevôlei, funcional e corridas. 
          A dica é aproveitar as inúmeras redes que estão dispostas (principalmente no Recife e Jaboatão dos Guararapes) e curtir uma boa partida. 
          A utilização dos espaços é gratuita e aberta a todo o público.
        </p>
        </div>
      </div>
    );
  }

  if(data.lang=="us"){
    return (
      <div className="pagina-esportes-lazer">
        <h1>Sports and Leisure</h1>
        <div className='conteudo'>
        <img src={lazerImagem} alt="People playing beach volleyball" id='imagem'/>
        <p className='texto'>Surfing has been prohibited in the Recife Metropolitan Region for over thirty years for safety reasons. 
          However, many alternative sporting activities can be enjoyed in the beach areas, such as beach volleyball, footvolley, functional training, and running. 
          We recommend taking advantage of the numerous nets set up (especially in Recife and Jaboatão dos Guararapes) and enjoy a good match. 
          Using these spaces is free and available for everyone."
        </p>
        </div>
      </div>
    );
  }
}

export default EsportesLazer;
