import './BotBar.css';
import React from 'react';
import ouvidoria from '../imgs/icon-ouvidoria.jpg';
import { Link } from 'react-router-dom';

const BotBar = () => {
  return (
    <div id='botbar'>
      <span className='center-buttons'>
        <Link to="/" className='buttons'>INÍCIO</Link>
        <Link to="/area-de-risco" className='buttons'>ÁREA DE RISCO</Link>
        <Link to="/clima-e-mare" className='buttons'>CLIMA E MARÉ</Link>
        <Link to="/informacoes-uteis" className='buttons'>INFORMAÇÕES ÚTEIS</Link>
        <Link to="/emergencia" className='buttons'>EMERGÊNCIA</Link>
      </span>
      <Link to="/ouvidoria">
        <img src={ouvidoria} alt="Ouvidoria" id="ouvidoria-img" />
      </Link>
    </div>
  );
};

export default BotBar;