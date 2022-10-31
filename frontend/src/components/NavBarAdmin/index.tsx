import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useParams } from 'react-router-dom';


function NavBarAdmin() {

  const {codigo, matricula, tipo} = useParams();

  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
          
        <Navbar.Brand href="/">SCDiárias</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Cidade" id="collasible-nav-dropdown">
              <NavDropdown.Item href={"/cidade/cadastrarcidade/" + `${codigo}/${matricula}/${tipo}`}>Cadastrar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={"/cidade/editarcidade/" + `${codigo}/${matricula}/${tipo}`}>Editar</NavDropdown.Item>
                            
            </NavDropdown>

            <NavDropdown title="Usuário" id="collasible-nav-dropdown">
              <NavDropdown.Item href={"/usuario/cadastrarusuario/" + `${codigo}/${matricula}/${tipo}`}>Cadastrar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={"/usuario/editarusuario/" + `${codigo}/${matricula}/${tipo}`}>Editar</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="Escala" id="collasible-nav-dropdown">
              <NavDropdown.Item href={"/escala/cadastrar/" + `${codigo}/${matricula}/${tipo}`}>Cadastrar</NavDropdown.Item>
              <NavDropdown.Item href={"/escala/editar/" + `${codigo}/${matricula}/${tipo}`}>Editar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sobre
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Diária" id="collasible-nav-dropdown">
              <NavDropdown.Item href={"/usuario/cadastrardiaria/" + `${codigo}/${matricula}/${tipo}`}>Cadastrar</NavDropdown.Item>
              <NavDropdown.Item href={"/usuario/diaria/" + `${codigo}/${matricula}/${tipo}`}>Pesquisar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sobre
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav>
            <Nav.Link href="/despesas">Despesas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarAdmin;