import { Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import AreaDeRisco from './AreaDeRisco';
import ClimaEMare from './ClimaEMare';
import InformacoesUteis from './InformacoesUteis';
import Emergencia from './Emergencia'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/area-de-risco" element={<AreaDeRisco />} />
      <Route path="/clima-e-mare" element={<ClimaEMare />} />
      <Route path="/informacoes-uteis" element={<InformacoesUteis />} />
      <Route path="/emergencia" element={<Emergencia />} /> 
    </Routes>
  );
}

export default App;