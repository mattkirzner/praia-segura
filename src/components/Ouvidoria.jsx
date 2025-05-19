import * as React from 'react';
import { useState } from 'react';
import './Ouvidoria.css';
import { useLanguageContext } from './Context';

const Ouvidoria = () => {
  const [enviado, setEnviado] = useState(false);
  const { data } = useLanguageContext();

  const setValidation = (e) => {
    e.target.setCustomValidity('');
  };

  const setInvalid = (e) => {
    e.target.setCustomValidity(
      data.lang === 'br' ? 'Preencha este campo' : 'Please fill out this field'
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
  };

  if(data.lang == "br") {
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
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                placeholder="Insira seu nome aqui" 
                required 
                onChange={setValidation}
                onInvalid={setInvalid}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail*</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Insira seu e-mail aqui" 
                required 
                onChange={setValidation}
                onInvalid={setInvalid}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input 
                type="tel" 
                id="telefone" 
                name="telefone" 
                placeholder="(00) 00000-0000" 
                onChange={setValidation}
                onInvalid={setInvalid}
              />
            </div>

            <div className="form-group">
              <label htmlFor="categoria">Categoria*</label>
              <select 
                id="categoria" 
                name="categoria" 
                required
                onChange={setValidation}
                onInvalid={setInvalid}
                
              >
                <option value="">Selecione uma opção</option>
                <option value="sugestao">Sugestão</option>
                <option value="reclamacao">Reclamação</option>
                <option value="denuncia">Denúncia</option>
                <option value="observacao">Observação</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem*</label>
              <textarea 
                id="mensagem" 
                name="mensagem" 
                rows="6" 
                placeholder="Insira sua mensagem aqui" 
                required 
                onChange={setValidation}
                onInvalid={setInvalid}
              />
            </div>

            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </main>
    );
  }

  if(data.lang == "us") {
    return (
      <main className="ouvidoriaMain">
        <div className="formulario">
          <h1>Ombudsman - Your opinion matters!</h1>

          {enviado && (
            <p style={{ color: 'green', fontWeight: 'bold', marginBottom: '1em' }}>
              ✅ Message sent succesfully!
            </p>
          )}

          <form className="form-ouvidoria" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Full name*</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                placeholder="Insert your name here" 
                required 
                onChange={setValidation}
                onInvalid={setInvalid}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail*</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Insert your e-mail here" 
                required 
                onChange={setValidation}
                onInvalid={setInvalid}
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Contact number</label>
              <input 
                type="tel" 
                id="telefone" 
                name="telefone" 
                placeholder="+1 (000) 000-0000" 
                onChange={setValidation}
                onInvalid={setInvalid}
              />
            </div>

            <div className="form-group">
              <label htmlFor="categoria">Category*</label>
              <select 
                id="categoria" 
                name="categoria" 
                required
                onChange={setValidation}
                onInvalid={setInvalid}
              >
                <option value="">Choose an option</option>
                <option value="sugestao">Suggestion</option>
                <option value="reclamacao">Complaint</option>
                <option value="denuncia">Legal complaint</option>
                <option value="observacao">Observation</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Message*</label>
              <textarea 
                id="mensagem" 
                name="mensagem" 
                rows="6" 
                placeholder="Write your message here" 
                required 
                onChange={setValidation}
                onInvalid={setInvalid}
              />
            </div>

            <button type="submit">SEND</button>
          </form>
        </div>
      </main>
    );
  }
};

export default Ouvidoria;