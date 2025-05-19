import React, { useState } from 'react';
import './PaginaInicial.css';
import background from '../imgs/background-inicio.png';
import { useLanguageContext } from './Context';

function PaginaInicial() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const { data } = useLanguageContext();

  let msgErro = '';

  if (data.lang === 'br') {
    msgErro = 'Por favor, preencha o nome e ao menos o email ou telefone.';
  }

  if (data.lang === 'us') {
    msgErro = 'Please, enter your name and at least email or contact number.';
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nome.trim() === '' || (email.trim() === '' && telefone.trim() === '')) {
      setErro(msgErro);
      setSucesso(false);
    } else {
      setErro('');
      setSucesso(true);
      setNome('');
      setEmail('');
      setTelefone('');
    }
  };

  const setValidation = (e) => {
    e.target.setCustomValidity('');
  };

  const setInvalid = (e) => {
    e.target.setCustomValidity(
      data.lang === 'br' ? 'Preencha este campo' : 'Please fill out this field'
    );
  };

  return (
    <div className="pagina-inicial" style={{ backgroundImage: `url(${background})` }}>
      <div className="lado-esquerdo">
        <h1 className="texto-bemvindo">
          {data.lang === 'br'
            ? 'BEM VINDO À TERRA\nDOS ALTOS COQUEIROS'
            : 'WELCOME TO THE LAND\nOF TALL COCONUT TREES'}
        </h1>
      </div>

      <div className="lado-direito">
        <div className="form-fundo">
          <h2>
            {data.lang === 'br'
              ? 'CADASTRE-SE E\nRECEBA ALERTAS'
              : 'SIGN UP AND\nRECEIVE WARNINGS'}
          </h2>

          {sucesso ? (
            <p style={{ color: 'green', fontWeight: 'bold' }}>
              {data.lang === 'br'
                ? 'Cadastro realizado com sucesso! ✅'
                : 'Signed up successfully! ✅'}
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="nome">{data.lang === 'br' ? 'Nome:' : 'Name:'}</label>
              <input
                type="text"
                id="nome"
                placeholder={data.lang === 'br' ? 'Digite seu nome' : 'Insert your name'}
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                  setValidation(e);
                }}
                onInvalid={setInvalid}
                required
              />

              <label htmlFor="email">{data.lang === 'br' ? 'Email:' : 'Email:'}</label>
              <input
                type="email"
                id="email"
                placeholder={data.lang === 'br' ? 'Digite seu email' : 'Insert your email'}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setValidation(e);
                }}
                onInvalid={setInvalid}
              />

              <label htmlFor="telefone">{data.lang === 'br' ? 'Telefone:' : 'Contact Number:'}</label>
              <input
                type="tel"
                id="telefone"
                placeholder={
                  data.lang === 'br' ? "(00) 00000-0000" : 
                  "+1 (000) 000-0000"
                }
                value={telefone}
                onChange={(e) => {
                  setTelefone(e.target.value);
                  setValidation(e);
                }}
                onInvalid={setInvalid}
              />

              <button type="submit">{data.lang === 'br' ? 'CADASTRAR' : 'SIGN UP'}</button>
            </form>
          )}

          {erro && <p style={{ color: 'red' }}>{erro}</p>}

          <p className="form-lgpd">
            {data.lang === 'br' ? (
              <>
                A segurança dos seus dados é nossa prioridade. Todas as informações fornecidas neste formulário são tratadas em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
                <br /><br />
                Seus dados serão utilizados exclusivamente para os fins informados, sem compartilhamento indevido com terceiros.
              </>
            ) : (
              <>
                Keeping your personal information safe is our priority. All information given in this form is protected under the General Law Of Data Protection (Lei Geral de Proteção de Dados/LGPD – Lei nº 13.709/2018).
                <br /><br />
                Your information will only be accessed for the uses agreed upon, without unwarranted sharing with third parties.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaginaInicial;
