import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">SCDiárias</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Diária" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/cadastrardiaria">Cadastrar</NavDropdown.Item>
              <NavDropdown.Item href="/diaria">Pesquisar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Sobre
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Escala" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/escala">Cadastrar</NavDropdown.Item>
              <NavDropdown.Item href="/editar">Editar</NavDropdown.Item>
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

export default NavBar;