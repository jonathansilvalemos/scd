import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
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
          <Route path="/usuario/login" element={<Login />} />
          <Route path="/usuario/validarsenha" element={<Login />} />
          <Route path="/escala" element={<Escala />} />
          <Route path="/usuario/diaria/:codigo/:matricula/:tipo" element={<Diaria />} />
          <Route path="/usuario/cadastrarusuario/:codigo/:matricula/:tipo" element={<CadastrarUsuario />} />
          <Route path="/usuario/editarusuario/:codigo/:matricula/:tipo" element={<EditarUsuario />} />
          <Route path="/usuario/editar/:codigo/:matricula/:tipo/:id" element={<EditarUsuarioForm />} />
          <Route path="/cidade/cadastrarcidade/:codigo/:matricula/:tipo" element={<CadastrarCidade />} />
          <Route path="/cidade/editarcidade/:codigo/:matricula/:tipo" element={<EditarCidade />} />
          <Route path="/cidade/editar/:codigo/:matricula/:tipo/:id" element={<EditarCidadeForm />} />
          <Route path="/usuario/cadastrardiaria/:codigo/:matricula/:tipo/:id" element={<CadastrarDiaria />} />
          <Route path="/despesas" element={<Despesas />} />
          <Route path="/cidade/select" element={<SelectCidade />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;