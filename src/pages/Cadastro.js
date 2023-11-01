import React, { Component } from 'react';
import './Global.css';
import axios from 'axios';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '', 
      telefone: '', 
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { nome, email, senha, confirmarSenha, telefone } = this.state;

    // Verifica se as senhas são iguais
    if (senha !== confirmarSenha) {
      console.error('As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/usuarios', {
        nome,
        email,
        senha,
        telefone, 
      });

      if (response.status === 201) {
        console.log('Usuário cadastrado com sucesso');
      } else {
        console.error('Erro ao cadastrar o usuário');
      }
    } catch (error) {
      console.error('Erro ao cadastrar o usuário', error);
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { nome, email, senha, confirmarSenha, telefone } = this.state;
    return (
      <div className="div-cadastro-pai">
        <div className="div-cadastro">
          <main className="main-cadastro">
            <form className="form-login form-cadastro" onSubmit={this.handleSubmit}>
              <h2 className="h2-cadastro">CADASTRO</h2>
              <input className="inputs input-user" type="text" name="nome" value={nome} onChange={this.handleChange} placeholder="NOME COMPLETO" required autoFocus />
              <input className="inputs input-email" type="email" name="email" value={email} onChange={this.handleChange} placeholder="E-MAIL" required />
              <input className="inputs input-senha" type="password" name="senha" value={senha} onChange={this.handleChange} placeholder="SENHA" required />
              <input className="inputs input-senha" type="password" name="confirmarSenha" value={confirmarSenha} onChange={this.handleChange} placeholder="CONFIRME SUA SENHA" required />
              <input className="inputs input-telefone" type="text" name="telefone" value={telefone} onChange={this.handleChange} placeholder="TELEFONE" required />
              <div className="div-texto">
                <p className="p-login">JÁ POSSUI CADASTRO?</p>
                <a className="link-cadastro" href="/login">Login!</a>
              </div>
              <div className="div-login-com">
                <button className="button-login-cadastro" type="submit">CADASTRAR</button>
              </div>
            </form>
          </main>
          <aside className="aside-cadastro">
            <div className="div-logo div-logo-cadastro">
              <a href="index.html">
              <img className="img-logo" src="/img/logo.png" alt="logo-lifeTidy" />
              </a>
            </div>
            <div className="div-recados-cadastro">
              <p className="p-cadastro">Viva de forma organizada,
                torne o seu dia a dia mais produtivo. <br />
                <br /> A organização é a chave para a produtividade.
              </p>
            </div>
            <div className="div-img-exibição">
              <img className="img-exibição" src="/img/exibição.jpg" alt="Imagem de Exibição" />
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Cadastro;
