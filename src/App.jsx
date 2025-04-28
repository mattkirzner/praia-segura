import * as React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import BotBar from './components/BotBar';
import { Routes, Route } from 'react-router-dom';

// Importe os componentes do dropdown diretamente da pasta components (nomes CORRIGIDOS)
import PaginaEcossistemaComponent from './components/Ecossistema';
import PaginaTubaroesComponent from './components/PaginaTubaroes';
import PaginaComoCurtirComponent from './components/PaginaComoCurtir';
import PaginaEcoturismoComponent from './components/PaginaEcoturismo';
import PergFreq from './components/PergFreq'; 
import EsportesLazer from './components/EsportesLazer'

const App = () => {
  return (
    <>
      <TopBar />
      <BotBar /> {/* A BotBar deve vir ANTES do Routes */}
      <Routes>
        {/* Rotas para os itens do dropdown */}
        <Route path="/Ecossistema" element={<PaginaEcossistemaComponent />} />
        <Route path="/Tubaroes" element={<PaginaTubaroesComponent />} />
        <Route path="/ComoCurtir" element={<PaginaComoCurtirComponent />} />
        <Route path="/Ecoturismo" element={<PaginaEcoturismoComponent />} />
        <Route path="/PergFreq" element={<PergFreq />} />
        <Route path="/EsportesLazer" element={<EsportesLazer />} />
        


        

        {/* Outras rotas principais (Início, Área de Risco, etc.) */}
        {/* Vamos adicionar rotas básicas para evitar erros por enquanto */}
        <Route path="/" element={<div>Página Inicial</div>} />
        <Route path="/AreaDeRisco" element={<div>Área de Risco</div>} />
        <Route path="/ClimaEMare" element={<div>Clima e Maré</div>} />
        <Route path="/Emergencia" element={<div>Emergência</div>} />
        <Route path="/ouvidoria" element={<div>Ouvidoria</div>} />
      </Routes>
    </>
  );
};

export default App;