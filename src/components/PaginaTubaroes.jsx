import React from 'react';
import InfoUtil from '../components/InfoUtil'; 
import tubaraoImagem from '../imgs/tubarao.jpg'; 
import './PaginaTubarões.css'; 

function PaginaTubarões() {
  const tituloTubarões = 'Tubarões';
  const textoTubarões = 'Segundo o Comitê Estadual de Monitoramento de Incidentes com Tubarões  (Cemit), foram registrados 77 ocorrências de ataque de tubarão no estado de Pernambuco desde 1992, das quais 67 ocorreram no continente e outras 10 na Arquipélago de Fernando de Noronha.O fluxo de embarcações em razão do porto de Suape, a presença de um canal marinho profundo e dos arrecifes são alguns dos fatores que contribuem para a presença de tais animais na região. Dentre as espécies mais presentes podemos citar o tubarão lixa (Ginglymostoma cirratum), cabeça-chata (Carcharhinus leucas) e tubarão tigre (Galeocerdo cuvier). '

  return (
    <div className="pagina-tubaroes">
      <InfoUtil
        titulo={tituloTubarões}
        imagemSrc={tubaraoImagem}
        texto={textoTubarões}
      />
      
    </div>
  );
}

export default PaginaTubarões;