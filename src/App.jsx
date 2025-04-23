import * as React from 'react';
import './App.css'
import gov from './imgs/govpe.png';
import logo from './imgs/pslogo.png';
import brasil from './imgs/brasil.png';
import eua from './imgs/eua.png'
import ouvidoria from './imgs/icon-ouvidoria.jpg'

const TopBar = () =>{
  return(
    
    <div id='topbar'>
    <img src={gov} className='topimg' id='gov' alt="" />
    <img src={logo} className='topimg' id='logo' alt="" />
    <span className='langs'><img src={brasil} className='topimg' alt="" /><img  src={eua} className='topimg' alt="" /></span>
    </div>
    
  )

};

const BotBar = () =>{
  
  return(
    <div id='botbar'>
    <span className='center-buttons'>
      <button className='buttons'>INÍCIO</button>
      <button className='buttons'>ÁREA DE RISCO</button>
      <button className='buttons'>CLIMA E MARÉ</button>
      <button className='buttons'>INFORMAÇÕES ÚTEIS</button>
      <button className='buttons'>EMERGÊNCIA</button></span>
      <img src={ouvidoria} alt="" />
    </div>
  )

};



const App = () => {
  return(
    <><TopBar />
    <BotBar /></>
  )
};


export default App;
