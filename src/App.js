import { Routes, Route, Outlet, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Conta from "./pages/Contacriada";
import Recuperar from "./pages/Recuperarsenha";
import Home from "./pages/Home";
import Estudo from "./pages/Estudo";



export default function App() {
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="Cadastro" element={<Cadastro />} />
          <Route path="Login" element={<Login />} />
          <Route path="Contacriada" element={<Conta />} />
          <Route path ="Recuperarsenha" element={<Recuperar/>}/>
          <Route path ="Home" element={<Home/>}/>
          <Route path ="Estudo" element={<Estudo/>}/>

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  );
}

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}



function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}