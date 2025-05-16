import React, { useState } from 'react';
import './PaginaInicial.css';
import background from '../imgs/background-inicio.png';
import {useLanguageContext}  from './Context';

function PaginaInicial() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false); // <- novo estado

  const{data} = useLanguageContext();

  let msgErro = "";

  if (data.lang == "br"){
    msgErro = 'Por favor, preencha o nome e ao menos o email ou telefone.'
  }

  if (data.lang == "us"){
    msgErro = 'Please, answer your name and email and/or phone number.'
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    if (nome.trim() === '' || (email.trim() === '' && telefone.trim() === '')) {
      setErro(msgErro);
      setSucesso(false);
    } else {
      setErro('');
      setSucesso(true);
      // Simula envio e reseta os campos
      setNome('');
      setEmail('');
      setTelefone('');
    }
  };

  if (data.lang == "br"){
    return (
      <div className="pagina-inicial" style={{ backgroundImage: `url(${background})` }}>
        <div className="lado-esquerdo">
          <h1 className="texto-bemvindo">
            BEM VINDO À TERRA<br />DOS ALTOS COQUEIROS
          </h1>
        </div>
        <div className="lado-direito">
          <div className="form-fundo">
            <h2>CADASTRE-SE E<br />RECEBA ALERTAS</h2>

            {/* Mostra mensagem de sucesso ou o formulário */}
            {sucesso ? (
              <p style={{ color: 'green', fontWeight: 'bold' }}>
                Cadastro realizado com sucesso! ✅
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="telefone">Telefone:</label>
                <input
                  type="tel"
                  id="telefone"
                  placeholder="(00) 00000-0000"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />

                <button type="submit">CADASTRAR</button>
              </form>
            )}

            {/* Mostra mensagem de erro, se houver */}
            {erro && <p style={{ color: 'red' }}>{erro}</p>}

            <p className="form-lgpd">
              A segurança dos seus dados é nossa prioridade. Todas as informações fornecidas neste formulário são tratadas em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).<br /><br />
              Seus dados serão utilizados exclusivamente para os fins informados, sem compartilhamento indevido com terceiros.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (data.lang == "us"){
    return (
      <div className="pagina-inicial" style={{ backgroundImage: `url(${background})` }}>
        <div className="lado-esquerdo">
          <h1 className="texto-bemvindo">
            WELCOME TO THE LAND<br />OF TALL PALMS
          </h1>
        </div>
        <div className="lado-direito">
          <div className="form-fundo">
            <h2>SIGN UP AND<br />RECEIVE WARNINGS</h2>

            {/* Mostra mensagem de sucesso ou o formulário */}
            {sucesso ? (
              <p style={{ color: 'green', fontWeight: 'bold' }}>
                Signed-up succesfully! ✅
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Name:</label>
                <input
                  type="text"
                  id="nome"
                  placeholder="Insert your name"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Insert your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="telefone">Telephone:</label>
                <input
                  type="tel"
                  id="telefone"
                  placeholder="(00) 00000-0000"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />

                <button type="submit">SIGN-UP</button>
              </form>
            )}

            {/* Mostra mensagem de erro, se houver */}
            {erro && <p style={{ color: 'red' }}>{erro}</p>}

            <p className="form-lgpd">
              Keeping your personal information safe is our priority.  All information given in this form are protected under the General Law Of Data Protection (Lei Geral de Proteção de Dados/LGPD – Lei nº 13.709/2018).
              <br></br><br></br>Your information will only be accessed for the uses agreed upon without unwarranted sharing with third parties.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PaginaInicial;
