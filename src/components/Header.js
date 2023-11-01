import React from 'react';
import './pages/Global.css'; 

function Header() {
  return (
    <header className="header-tela-inicial">
      <div className="div-logo-header div-logo-header-home">
        <a href="home.html">
          <div className="img-logo-home">
          <img className="img-logo" src="/img/logo.png" alt="logo-lifeTidy" />
          </div>
         
        </a>
      </div>
      <div className="div-buttons">
     
        <input className="inputs input-pesquisa" type="text" placeholder="PESQUISAR" />
        <div className="div-buttons-modal">
          <button className="button-login button-login-home button-adicionar"> <img src="/img/adicionar.png"></img></button>
          <button className="button-login button-login-home button-aviso"><img src="/img/notificacoes.png"></img></button>
          <button className="button-login button-login-home button-desempenho"><img src ="/img/rendimento.png"></img></button>
        </div>
      </div>
      <div className="div-perfil">
        <p className="p-nome-usuario">Nome Usuario</p>
        <div className="div-img-perfil">
          <a className="link-perfil" href="#">
            <img className="img-perfil" src="/img/perfil.png" alt="logo-perfil" />
          </a>
          <div className="sub-menu-header">
            <a href="">EDITAR PERFIL</a>
            <a href="">CONFIGURAÇÕES</a>
            <a href="index.html">SAIR</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
