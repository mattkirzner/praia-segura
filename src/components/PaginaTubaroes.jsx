import React from 'react';
import './PaginaTubaroes.css';
import tubaraoImagem from '../imgs/tubarao.jpeg'; 

function PaginaTubaroes() {
  const tituloTubaroes = 'Tubarões';
  const textoTubaroesComQuebraLinha = `Segundo o Comitê Estadual de Monitoramento de Incidentes com Tubarões (Cemit), foram registrados 77 ocorrências de ataque de tubarão no estado de Pernambuco desde 1992, das quais 67 ocorreram no Recife e outras 10 no Arquipélago de Fernando de Noronha. O fluxo de embarcações em razão do porto de Suape, a presença de um canal marinho profundo e dos arrecifes são alguns dos fatores que contribuem para os animais na região. Dentre as espécies presentes podemos citar o tubarão lixa (Ginglymostoma cirratum), cabeça-chata (Carcharhinus leucas) e tubarão tigre (Galeocerdo cuvier).<br /><br />Diante desse cenário, diversas medidas de segurança e monitoramento foram implementadas ao longo dos anos. O Comitê Estadual de Monitoramento de Incidentes com Tubarões (CEMIT) desempenha um papel crucial na coleta de dados, pesquisa, sinalização de áreas de risco e na implementação de ações preventivas.`;

  return (
    <div className="pagina-tubaroes">
      <h1>{tituloTubaroes}</h1>
      <div className="secao-tubaroes">
        <img src={tubaraoImagem} alt="Tubarão" />
        <p dangerouslySetInnerHTML={{ __html: textoTubaroesComQuebraLinha }} />
      </div>
    </div>
  );
}

export default PaginaTubaroes;