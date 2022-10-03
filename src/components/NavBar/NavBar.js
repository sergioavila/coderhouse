import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand to={'/'}>
                    <img src={Logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to={'/'}>Inicio</Nav.Link>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Videojuegos</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Figuritas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Noticias</Nav.Link>
                    <Nav.Link href="#link">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <CartWidget />
            </Container>
        </Navbar>
    )
}

export default NavBar