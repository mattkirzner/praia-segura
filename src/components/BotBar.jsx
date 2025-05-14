
import React, { useState } from 'react';
import './BotBar.css';
import ouvidoriaIcon from '../imgs/icon-ouvidoria.jpg'; 
import { Link } from 'react-router-dom';

function BotBar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div id='botbar'>
      <span className='center-buttons'>
        <Link to="/" className='buttons'>INÍCIO</Link>
        <Link to="/AreaDeRisco" className='buttons'>ÁREA DE RISCO</Link>
        <Link to="/ClimaEMare" className='buttons'>CLIMA E MARÉ</Link>
        <div
          className="dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="buttons dropdown-toggle">INFORMAÇÕES ÚTEIS</span>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="/Ecossistema">Ecossistema</Link></li>
              <li><Link to="/Tubaroes">Tubarões</Link></li>
              <li><Link to="/ComoCurtir">Como Curtir</Link></li>
              <li><Link to="/Ecoturismo">Ecoturismo</Link></li>
              <li><Link to="/EsportesLazer">Esportes e Lazer</Link></li>
              <li><Link to="/PergFreq">Peguntas frequentes</Link></li>
            
            </ul>
          )}
        </div>
        <Link to="/Emergencia" className='buttons'>EMERGÊNCIA</Link>
      </span>
      <Link to="/ouvidoria" className='ouvidoria-button'>
        <img src={ouvidoriaIcon} alt="Ouvidoria" className="ouvidoria-image" />
      </Link>
    </div>
  );
}

export default BotBar;