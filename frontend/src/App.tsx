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



function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<ScdCard />} />
          <Route path="/editar" element={<EditarDiaria />} />
          <Route path="/login" element={<Login />} />
          <Route path="/escala" element={<Escala />} />
          <Route path="/diaria" element={<Diaria />} />
          <Route path="/cadastrarusuario" element={<CadastrarUsuario />} />
          <Route path="/cadastrarcidade" element={<CadastrarCidade />} />
          <Route path="/cadastrardiaria" element={<CadastrarDiaria />} />
          <Route path="/despesas" element={<Despesas />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;