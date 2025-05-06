import React from 'react';
import './AreaDeRisco.css'; 
import background from '../imgs/background-area-de-risco.png'
import mapa1 from '../imgs/mapa-1.png';
import mapa2 from '../imgs/mapa-2.png';
import mapa3 from '../imgs/mapa-3.png';

function AreaDeRisco() {
 const textoMapa1 = `PRAIA DE BOA VIAGEM: aconselhado o banho de mar apenas na maré-baixa e em áreas de arrecifes` 

 const textoMapa2 = `PRAIA DE PIEDADE (IGREJINHA) - HOTEL BARRAMARES: banho de mar proibido no trecho` 

 const textoMapa3 = `PRAIA DO PAIVA - PRAIA DE ITAPUAMA: aconselhado o banho de mar apenas na maré baixa e em áreas de arrecifes` 
 
 return (
    <div className="areaDeRisco-container" style={{ backgroundImage: `url(${background})` }}>

        
    <div className="container">
        <img src={mapa1} alt="PRAIA DE BOA VIAGEM" className="imagem" />
        <div className='contatos-box'>
        <p className="texto">{textoMapa1}</p>
        </div>
    </div>

    <div className="container">
        <img src={mapa2} alt="PRAIA DE PIEDADE (IGREJINHA)" className="imagem" />
        <div className='contatos-box'>
        <p className="texto">{textoMapa2}</p>
        </div>
    </div>

    <div className="container">
        <img src={mapa3} alt="PRAIA DO PAIVA" className="imagem" />
        <div className='contatos-box'>
        <p className="texto">{textoMapa3}</p>
        </div>
    </div>


    </div>
  );
}

export default AreaDeRisco;