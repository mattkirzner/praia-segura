import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import BotBar from './components/BotBar';

import Inicio from './pages/Inicio';
import Ouvidoria from './pages/Ouvidoria';


const App = () => {
  return (
    <Router>
      <TopBar />
      <BotBar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/ouvidoria" element={<Ouvidoria />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;