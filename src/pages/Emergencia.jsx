import * as React from 'react'; 
import TopBar from '../components/TopBar';
import BotBar from '../components/BotBar';
import './Emergencia.css';
import Emerg from '../imgs/Emerg.png';

export default function Emergencia() {
  return (
    <div>
      <TopBar />
      <BotBar />
        
        <div className="emergencia-container" style= {{ backgroundImage: `url(${Emerg})` }}>
        <h1>CONTATOS DE EMERGÊNCIA</h1>
        <p>Polícia Militar: 190</p>
        <p>SAMU: 192</p>
        <p>Corpo de Bombeiros: 193</p>
        <p>Defesa Civil: 199</p>
        <p>Delegacia do Turista: (81) 3322-4867</p>
        <p>IBAMA (Linha Verde): 0800 061 8080</p>
        </div>
     </div>
  );
}
