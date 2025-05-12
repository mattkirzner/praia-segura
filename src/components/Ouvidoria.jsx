import * as React from 'react';
import { useState } from 'react';
import './Ouvidoria.css';

const Ouvidoria = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);

    // Opcional: resetar o formulário após enviar
    e.target.reset();
  };

  return (
    <main className="ouvidoriaMain">
      <div className="formulario">
        <h1>Ouvidoria - Sua opinião é importante!</h1>

        {enviado && (
          <p style={{ color: 'green', fontWeight: 'bold', marginBottom: '1em' }}>
            ✅ Mensagem enviada com sucesso!
          </p>
        )}

        <form className="form-ouvidoria" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome Completo*</label>
            <input type="text" id="nome" name="nome" placeholder="Insira seu nome aqui" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail*</label>
            <input type="email" id="email" name="email" placeholder="Insira seu e-mail aqui" required />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input type="tel" id="telefone" name="telefone" placeholder="(00) 00000-0000" />
          </div>

          <div className="form-group">
            <label htmlFor="categoria">Categoria*</label>
            <select id="categoria" name="categoria" required>
              <option value="">Selecione uma opção</option>
              <option value="sugestao">Sugestão</option>
              <option value="reclamacao">Reclamação</option>
              <option value="denuncia">Denúncia</option>
              <option value="observacao">Observação</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem*</label>
            <textarea id="mensagem" name="mensagem" rows="6" placeholder="Insira sua mensagem aqui" required />
          </div>

          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </main>
  );
};

export default Ouvidoria;
