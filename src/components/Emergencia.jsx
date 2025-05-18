// Emergencia.jsx
import * as React from 'react'; 
import './Emergencia.css';
import Emerg from '../imgs/Emerg.png';
import { useLanguageContext } from './Context';


export default function Emergencia() {
  const {data}=useLanguageContext();

  if(data.lang == "br"){
  return (
    <div className="emergencia-page">
      <div className="emergencia-container" style={{ backgroundImage: `url(${Emerg})` }}>
        <div className="emergencia-content">
          <div className="contatos-box">
          <h1>CONTATOS DE EMERGÊNCIA</h1>
            <p><strong>Polícia Militar:</strong> <a href="tel:190" className="emergency-link">190</a></p>
            <p><strong>SAMU:</strong> <a href="tel:192" className="emergency-link">192</a></p>
            <p><strong>Corpo de Bombeiros:</strong> <a href="tel:193" className="emergency-link">193</a></p>
            <p><strong>Defesa Civil:</strong> <a href="tel:199" className="emergency-link">199</a></p>
            <p><strong>Delegacia do Turista:</strong> <a href="tel:8133224867" className="emergency-link">(81) 3322-4867</a></p>
            <p><strong>IBAMA (Linha Verde):</strong> <a href="tel:08000618080" className="emergency-link">0800 061 8080</a></p>
          </div>
        </div>
      </div>
    </div>
  );
  }

  if(data.lang == "us"){
    return (
      <div className="emergencia-page">
        <div className="emergencia-container" style={{ backgroundImage: `url(${Emerg})` }}>
          <div className="emergencia-content">
            <div className="contatos-box">
            <h1>EMERGENCY CONTACTS</h1>
              <p><strong>Military Police:</strong> <a href="tel:190" className="emergency-link">190</a></p>
              <p><strong>SAMU (ambulance):</strong> <a href="tel:192" className="emergency-link">192</a></p>
              <p><strong>Fire Department:</strong> <a href="tel:193" className="emergency-link">193</a></p>
              <p><strong>Civil Defense:</strong> <a href="tel:199" className="emergency-link">199</a></p>
              <p><strong>Tourist Police Station:</strong> <a href="tel:8133224867" className="emergency-link">(81) 3322-4867</a></p>
              <p><strong>IBAMA (Green Line):</strong> <a href="tel:08000618080" className="emergency-link">0800 061 8080</a></p>
            </div>
          </div>
        </div>
      </div>
    );
    }

}