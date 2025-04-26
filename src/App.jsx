import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import BotBar from './components/BotBar';
import Inicio from './Inicio';
import AreaDeRisco from './AreaDeRisco';
import ClimaEMare from './ClimaEMare';
import InformacoesUteis from './InformacoesUteis';
import Emergencia from './Emergencia'; 

const App = () => {
  return (
    <Router>
      <TopBar />
      <BotBar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/area-de-risco" element={<AreaDeRisco />} />
          <Route path="/clima-e-mare" element={<ClimaEMare />} />
          <Route path="/informacoes-uteis" element={<InformacoesUteis />} />
          <Route path="/emergencia" element={<Emergencia />} /> 
        </Routes>
      </main>
    </Router>
  );
};

export default App;