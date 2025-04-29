import React from 'react';
import './PergFreq.css'; 

const PergFreq = () => {
  return (
    <div className="perguntas-frequentes-container">
      <h1 >Perguntas Frequentes</h1>

      <div className="pergunta">
        <h2>Nunca é possível tomar banho de mar na área de risco?</h2>
        <p>
          O banho de mar pode ocorrer nas regiões de piscinas, que são formadas na maré baixa e são encontradas,
          principalmente, na praia de Boa Viagem. A condição necessária é a formação de piscinas na maré baixa, não o
          simples fato de estar em maré baixa. Portanto, para um banho seguro, procure as piscinas naturais formadas na
          maré baixa. Recomendamos o monitoramento da maré por aqui.
        </p>
      </div>

      <div className="pergunta">
        <h2>Em quais condições devo evitar completamente o banho de mar?</h2>
        <p>
          Algumas circunstâncias são completamente desfavoráveis, se levarmos em conta a sua segurança. São elas: dias
          chuvosos, dias com água mais turva, na maré alta, em todos os locais sem a presença de arrecifes (mesmo na maré
          baixa, pois não são formadas piscinas), em locais próximos ao encontro com rios, nos primeiros horários da manhã
          e nos horários finais da tarde, se você estiver com algum ferimento ou sangramento, se estiver consumindo bebida
          alcoólica, se estiver sozinho e se estiver usando objetos brilhantes. Em tais ocasiões e locais o risco de ataque
          de tubarão aumenta significativamente.
        </p>
      </div>

      <div className="pergunta">
        <h2>O perigo é o mesmo em todo o trecho de risco? Existem áreas proibidas?</h2>
        <p>
          Não. Embora o banho de mar em toda a área de risco, que vai da praia do Farol em Olinda até praia de Itapuama no
          Cabo de Santo Agostinho, seja desencorajado (com exceção das piscinas naturais formadas na maré baixa), existe
          uma área que tem concentrado, historicamente, mais ataques e por isso o banho está PROIBIDO por decreto
          municipal: o trecho entre a Igrejinha de Piedade e o Hotel Barramares, localizado ao lado do Hospital da Aeronáutica.
        </p>
      </div>

      <div className="pergunta">
        <h2>O que devo fazer na hipótese de ataque?</h2>
        <p>
          Apesar de tudo, tente ao máximo não entrar em pânico. Nade lentamente para longe dele, movimentando o mínimo
          de água. Afaste-se de frente e lentamente, sem bater braços e pernas. Grite para solicitar ajuda, principalmente dos
          salva-vidas que estão estrategicamente posicionados. Assim que possível, saia da água e procure os serviços de
          primeiros socorros.
        </p>
      </div>
    </div>
  );
};

export default PergFreq;