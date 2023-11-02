import { Routes, Route, Outlet, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

export default function App() {
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="Cadastro" element={<Cadastro />} />
          <Route path="Login" element={<Login />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
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