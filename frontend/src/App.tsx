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
import UsuarioCadastrar from "./pages/UsuarioCadastrar";
import CidadeCadastrar from "./pages/CidadeCadastrar";
import DiariaCadastrar from "./pages/DiariaCadastrar";
import Despesas from "./pages/Despesas";
import CidadeListar from "./pages/CidadeListar";
import CidadeEditar from "./pages/CidadeEditar";
import UsuarioListar from "./pages/UsuarioListar";
import UsuarioEditar from "./pages/UsuarioEditar";
import SelectCidade from "./components/SelectCidade";
import EscalaListar from "./pages/EscalaListar";
import EscalaMostrar from "./pages/EscalaMostrar";
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
          <Route path="/editar" element={<DiariaEditar />} />
          <Route path="/usuario">
            <Route path="login" element={<Login />} />
            <Route path="validarsenha" element={<Login />} />
            <Route path="cadastrarusuario/:cod/:mat/:tip" element={<UsuarioCadastrar />} />
            <Route path="editarusuario/:cod/:mat/:tip" element={<UsuarioListar />} />
            <Route path="editar/:cod/:mat/:tip/:id" element={<UsuarioEditar />} />
            <Route path="excluir/:cod/:mat/:tip/:codigo" element={<UsuarioListar />} />
            
          </Route>

          <Route path="/cidade">
            <Route path=":cod/:mat/:tip" element={<CidadeCadastrar />} />
            <Route path="editarcidade/:cod/:mat/:tip" element={<CidadeListar />} />
            <Route path="editar/:cod/:mat/:tip/:id" element={<CidadeEditar />} />
            <Route path="select" element={<SelectCidade />} />
          </Route>

          <Route path="/escala">
            <Route path="cadastrar/:cod/:mat/:tip" element={<Escala />} />
            <Route path="listar/:cod/:mat/:tip" element={<EscalaListar />} />
            <Route path="listar/mostrar/:cod/:mat/:tip/:id" element={<EscalaMostrar />} />
          </Route>

          <Route path="/diaria">
            <Route path=":cod/:mat/:tip" element={<Diaria />} />
            <Route path="cadastrar/:cod/:mat/:tip" element={<DiariaCadastrar />} />
            <Route path="listar/:cod/:mat/:tip" element={<EscalaListar />} />
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