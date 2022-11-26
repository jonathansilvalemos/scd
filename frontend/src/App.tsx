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
import EditarDiaria from "./pages/DiariaEditar";
import CadastrarUsuario from "./pages/UsuarioCadastrar";
import CadastrarCidade from "./pages/CidadeCadastrar";
import CadastrarDiaria from "./pages/DiariaCadastrar";
import Despesas from "./pages/Despesas";
import EditarCidade from "./pages/CidadeListar";
import EditarCidadeForm from "./pages/CidadeEditar";
import EditarUsuario from "./pages/UsuarioListar";
import EditarUsuarioForm from "./pages/UsuarioEditar";
import SelectCidade from "./components/SelectCidade";
import ListarEscalas from "./pages/EscalaListar";
import MostrarEscala from "./pages/EscalaMostrar";
import DiariaEditar from "./pages/DiariaEditar";
import DiariaDespesaMostrar from "./pages/DiariaDespesaMostrar";
import DiariaDeslocamentoMostrar from "./pages/DiariaDeslocamentoMostrar";

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
            <Route path="cadastrarusuario/:cod/:mat/:tip" element={<CadastrarUsuario />} />
            <Route path="editarusuario/:cod/:mat/:tip" element={<EditarUsuario />} />
            <Route path="editar/:cod/:mat/:tip/:id" element={<EditarUsuarioForm />} />
            <Route path="excluir/:cod/:mat/:tip/:codigo" element={<EditarUsuario />} />
            
          </Route>

          <Route path="/cidade">
            <Route path=":cod/:mat/:tip" element={<CadastrarCidade />} />
            <Route path="editarcidade/:cod/:mat/:tip" element={<EditarCidade />} />
            <Route path="editar/:cod/:mat/:tip/:id" element={<EditarCidadeForm />} />
            <Route path="select" element={<SelectCidade />} />
          </Route>

          <Route path="/escala">
            <Route path="cadastrar/:cod/:mat/:tip" element={<Escala />} />
            <Route path="listar/:cod/:mat/:tip" element={<ListarEscalas />} />
            <Route path="listar/mostrar/:cod/:mat/:tip/:id" element={<MostrarEscala />} />
          </Route>

          <Route path="/diaria">
            <Route path=":cod/:mat/:tip" element={<Diaria />} />
            <Route path="cadastrar/:cod/:mat/:tip" element={<CadastrarDiaria />} />
            <Route path="listar/:cod/:mat/:tip" element={<ListarEscalas />} />
            <Route path="editar/:cod/:mat/:tip/:id" element={<DiariaEditar />} />
            <Route path="listar/mostrardespesa/:cod/:mat/:tip/:id" element={<DiariaDespesaMostrar />} />
            <Route path="listar/mostrardeslocamento/:cod/:mat/:tip/:id" element={<DiariaDeslocamentoMostrar />} />
          </Route>

          <Route path="/despesas/:cod/:mat/:tip" element={<Despesas />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;