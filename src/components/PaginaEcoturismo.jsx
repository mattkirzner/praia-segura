import React from 'react';
import InfoUtil from '../components/InfoUtil';
import EcoturismoImagem from '../imgs/ecoturismo.JPG'; 
import './PaginaEcoturismo.css'; 
import { useLanguageContext } from './Context';


function PaginaEcoturismo() {
  const {data}=useLanguageContext();

  if(data.lang == "br"){
    return (
      <div className="pagina-ecoturismo">
        <h1>Ecoturismo</h1>
        <div className='conteudo'><img src={EcoturismoImagem} alt="Naufrágio" id='imagem'/>
        <span className='texto'><p>Recife é considerada a capital dos naufrágios no Brasil, devido à grande quantidade de navios naufragados e à intensa atividade de mergulho desenvolvida. Os mergulhos são desenvolvidos de forma sustentável. Existem naufrágios que também podem ser explorados na costa de Porto de Galinhas.</p>
        <p>Vejamos a lista de algumas atrações disponíveis:</p>
        <ul>
        <li>SERVERMAR I</li>
        <li>PIRAPAMA</li>
        <li>FLORIDA</li>
        <li>ALVARENGA</li>
        <li>DENTRE OUTROS!</li>
        </ul>
        <p><strong>Atenção:</strong> Somente realize tais atividades por meio de empresas habilitadas e cadastradas.</p>
        </span>
        </div>
        </div>
    );
  }

  if(data.lang == "us"){
    return (
      <div className="pagina-ecoturismo">
        <h1>Ecoturism</h1>
        <div className='conteudo'><img src={EcoturismoImagem} alt="Naufrágio" id='imagem'/>
        <span className='texto'><p>Recife is considered the capital of shipwrecks in Brazil due to the large number of sunken ships and the intense diving activity happening there. The dives are ecologically sustainable. There are also shipwrecks that can be explored along the coast of Porto de Galinhas.
        </p>
        <p>Let's take a look at a list of some available attractions:</p>
        <ul>
        <li>SERVERMAR I</li>
        <li>PIRAPAMA</li>
        <li>FLORIDA</li>
        <li>ALVARENGA</li>
        <li>AMONG OTHERS!</li>
        </ul>
        <p><strong>Note:</strong> Only engage in such activities through licensed and registered companies.</p>
        </span>
        </div>
        </div>
    );
  }
 }

export default PaginaEcoturismo;
