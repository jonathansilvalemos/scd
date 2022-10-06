import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Escala from "./pages/Escala";
import Diaria from "./pages/Diaria";
import NavBarPrincipal from "./components/NavBarPrincipal";


function App() {
  return (
    <BrowserRouter>
      <NavBarPrincipal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/escala" element={<Escala />} />
        <Route path="/diaria" element={<Diaria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;