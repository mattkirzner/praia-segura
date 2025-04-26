import './BotBar.css';
import React from 'react';
import ouvidoria from '../imgs/icon-ouvidoria.jpg';

const BotBar = () => {
  return (
    <div id='botbar'>
      <span className='center-buttons'>
        <button className='buttons'>INÍCIO</button>
        <button className='buttons'>ÁREA DE RISCO</button>
        <button className='buttons'>CLIMA E MARÉ</button>
        <button className='buttons'>INFORMAÇÕES ÚTEIS</button>
        <button className='buttons'>EMERGÊNCIA</button>
      </span>
      <img src={ouvidoria} alt="" />
    </div>
  );
};

export default BotBar;