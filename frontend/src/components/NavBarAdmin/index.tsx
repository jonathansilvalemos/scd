import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useParams } from 'react-router-dom';


function NavBarAdmin() {

  const { cod, mat, tip } = useParams();

  if (tip === 'admin') {
    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>

          <Navbar.Brand href="/">SCDiárias</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto">

              <NavDropdown title="Cidade" id="collasible-nav-dropdown" >
                <NavDropdown.Item href={"/cidade/" + `${cod}/${mat}/${tip}`} >Cadastrar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={"/cidade/editarcidade/" + `${cod}/${mat}/${tip}`}>Editar</NavDropdown.Item>

              </NavDropdown>

              <NavDropdown title="Usuário" id="collasible-nav-dropdown">
                <NavDropdown.Item href={"/usuario/cadastrarusuario/" + `${cod}/${mat}/${tip}`}>Cadastrar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={"/usuario/editarusuario/" + `${cod}/${mat}/${tip}`}>Editar</NavDropdown.Item>

              </NavDropdown>

              <NavDropdown title="Escala" id="collasible-nav-dropdown">
                <NavDropdown.Item href={"/escala/cadastrar/" + `${cod}/${mat}/${tip}`}>Cadastrar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={"/escala/listar/" + `${cod}/${mat}/${tip}`}>Listar</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Diária" id="collasible-nav-dropdown">
                <NavDropdown.Item href={"/diaria/cadastrar/" + `${cod}/${mat}/${tip}`}>Cadastrar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href={"/diaria/" + `${cod}/${mat}/${tip}`}>Pesquisar</NavDropdown.Item>
                                
              </NavDropdown>

            </Nav>
            <Nav>
              <Nav.Link href={"/despesas/" + `${cod}/${mat}/${tip}`}>Despesas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <Container>

          <Navbar.Brand href="/">SCDiárias</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto">

              <NavDropdown title="Escala" id="collasible-nav-dropdown">
                <NavDropdown.Item href={"/escala/cadastrar/" + `${cod}/${mat}/${tip}`} hidden>Cadastrar</NavDropdown.Item>
                <NavDropdown.Item href={"/escala/listar/" + `${cod}/${mat}/${tip}`}>Listar</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Diária" id="collasible-nav-dropdown">
                <NavDropdown.Item href={"/diaria/cadastrar/" + `${cod}/${mat}/${tip}`}>Cadastrar</NavDropdown.Item>                
                <NavDropdown.Divider />
                <NavDropdown.Item href={"/diaria/" + `${cod}/${mat}/${tip}`}>Pesquisar</NavDropdown.Item>
                
              </NavDropdown>

            </Nav>
            <Nav>
              <Nav.Link href={"/despesas/" + `${cod}/${mat}/${tip}`}>Despesas</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBarAdmin;