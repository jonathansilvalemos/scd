import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Escala from "./pages/Escala";
import Diaria from "./pages/Diaria";
import ScdCard from "./components/ScdCard";
import EditarDiaria from "./pages/EditarDiaria";
import CadastrarUsuario from "./pages/CadastrarUsuario";
import CadastrarCidade from "./pages/CadastrarCidade";
import CadastrarDiaria from "./pages/CadastrarDiaria";
import Despesas from "./pages/Despesas";
import EditarCidade from "./pages/EditarCidade";
import EditarCidadeForm from "./pages/EditarCidadeForm";
import EditarUsuario from "./pages/EditarUsuario";
import EditarUsuarioForm from "./pages/EditarUsuarioForm";
import SelectCidade from "./components/SelectCidade";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<ScdCard />} />
          <Route path="/editar" element={<EditarDiaria />} />
          <Route path="/usuario">
            <Route path="login" element={<Login />} />
            <Route path="validarsenha" element={<Login />} />
            <Route path="diaria/:cod/:mat/:tip" element={<Diaria />} />
            <Route path="cadastrarusuario/:cod/:mat/:tip" element={<CadastrarUsuario />} />
            <Route path="editarusuario/:cod/:mat/:tip" element={<EditarUsuario />} />
            <Route path="editar/:cod/:mat/:tip/:id" element={<EditarUsuarioForm />} />
            <Route path="cadastrardiaria/:cod/:mat/:tip/:id" element={<CadastrarDiaria />} />
          </Route>

          <Route path="/cidade">
            <Route path=":cod/:mat/:tip" element={<CadastrarCidade />} />
            <Route path="editarcidade/:cod/:mat/:tip" element={<EditarCidade />} />
            <Route path="editar/:cod/:mat/:tip/:id" element={<EditarCidadeForm />} />
            <Route path="select" element={<SelectCidade />} />
          </Route>

          <Route path="/escala">
            <Route path="cadastrar/:cod/:mat/:tip" element={<Escala />} />
          </Route>

          <Route path="/despesas" element={<Despesas />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;