import * as React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import BotBar from './components/BotBar';
import { Routes, Route } from 'react-router-dom';

// Importação dos componentes
import PaginaInicial from './components/PaginaInicial';
import PaginaEcossistemaComponent from './components/Ecossistema';
import PaginaTubaroesComponent from './components/PaginaTubaroes';
import PaginaComoCurtirComponent from './components/PaginaComoCurtir';
import PaginaEcoturismoComponent from './components/PaginaEcoturismo';
import PergFreq from './components/PergFreq';
import EsportesLazer from './components/EsportesLazer';
import Ouvidoria from './components/Ouvidoria';
import Emergencia from './components/Emergencia';

const App = () => {
  return (
    <>
      <TopBar />
      <BotBar />
      <Routes>
        {/* Rotas para os itens do dropdown */}
        <Route path="/Ecossistema" element={<PaginaEcossistemaComponent />} />
        <Route path="/Tubaroes" element={<PaginaTubaroesComponent />} />
        <Route path="/ComoCurtir" element={<PaginaComoCurtirComponent />} />
        <Route path="/Ecoturismo" element={<PaginaEcoturismoComponent />} />
        <Route path="/PergFreq" element={<PergFreq />} />
        <Route path="/EsportesLazer" element={<EsportesLazer />} />
        
        {/* Outras rotas principais */}
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/AreaDeRisco" element={<div>Área de Risco</div>} />
        <Route path="/ClimaEMare" element={<div>Clima e Maré</div>} />
        <Route path="/Emergencia" element={<Emergencia />} />
        <Route path="/Ouvidoria" element={<Ouvidoria />} />
      </Routes>
    </>
  );
};

export default App;
