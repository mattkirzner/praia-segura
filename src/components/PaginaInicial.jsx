import React from 'react';
import './PaginaInicial.css'; 
import background from '../imgs/background-inicio.png'

function PaginaInicial() {
  return (
    <div className="paginainicial-container" style={{ backgroundImage: `url(${background})` }}>
        <h1 className='branco'>BEM VINDO À TERRA DOS ALTOS COQUEIROS</h1>
    </div>
  );
}

export default PaginaInicial;