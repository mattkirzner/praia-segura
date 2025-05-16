import React from 'react';
import InfoUtil from '../components/InfoUtil';
import ComoCurtirImagem from '../imgs/ComoCurtir.jpeg'; 
import './PaginaComoCurtir.css'; 
import { useLanguageContext } from './Context';

function PaginaComoCurtir() {
  const {data}=useLanguageContext();

  if(data.lang == "br"){
    return (
      <div className="pagina-como-curtir">
        <h1>Como Curtir</h1>
        <div className='conteudo'>
        <img src={ComoCurtirImagem} alt="Praia com pessoas" id='imagem'/>
        <p className="texto">Algumas condutas devem ser adotadas para que você aproveite com segurança e responsabilidade as praias da RMR:<br /><br />

        Não entre no mar em áreas PROIBIDAS;<br /><br />

        Nas ÁREAS DE RISCO apenas tome banho nas formações de piscinas naturais (maré baixa);<br /><br />

        Não manuseie animais e/ou algas e corais;<br /><br />

        Não descarte lixos e dejetos na areia ou na água. Faça-o nos locais adequados;<br /><br />

        Respeite as orientações dos salva-vidas que estão estrategicamente posicionados. Eles zelam pelo seu bem.<br /><br />

        O descumprimento das normas pode acarretar em penalidades.
        </p>
        </div>
      </div>
    );
  }

  if(data.lang == "us"){
    return (
      <div className="pagina-como-curtir">
        <h1>How to enjoy</h1>
        <div className='conteudo'>
        <img src={ComoCurtirImagem} alt="People on the beach" id='imagem'/>
        <p className="texto">
          
        Some behaviors must be followed so you can safely and responsibly enjoy the beaches in the RMR:<br /><br />

        Do not enter the water in FORBIDDEN areas;<br /><br />

        In dangerous areas only enter the water in natural pools (low tide);<br /><br />

        Do not touch animals and/or algae and corals;<br /><br />

        Do not dispose of trash or waste in the sand or water. Do so only on the proper places;<br /><br />

        Follow all strategically positioned lifeguard's instructions. They care for your well-being;<br /><br />

        Failure to comply may result in fines and prosecution.
        </p>
        </div>
      </div>
    );
  }
}

export default PaginaComoCurtir;
