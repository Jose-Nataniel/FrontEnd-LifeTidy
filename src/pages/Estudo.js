

import Header from '../components/Header';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

import Menu from '../components/Menu';
import { FaPlus } from 'react-icons/fa';
import { FaThList } from 'react-icons/fa';


function Estudo() {


  return (
    <div>
    <Header />
   
     <div className="main-principal">
     <Menu/>
     
      <div id="calendar" style={{ display: 'none' }}></div>
      <main className="main-tela-principal">
        <div className="div-container-buttons-adicao">
          <a className="links-buttons-adicao links-buttons-adicao-marcador">
          <FaPlus/> ADICIONAR MARCADOR
          </a>
          <a className="links-buttons-adicao">
            <FaThList/> TODOS OS MARCADORES
          </a>
        </div>
      </main>
    
   </div>
   </div>
 
 );
}


export default Estudo;
