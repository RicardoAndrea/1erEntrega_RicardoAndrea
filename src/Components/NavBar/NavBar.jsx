import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo';

function NavBar() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className='main'>
          <Navbar.Brand href="#home"> <Logo/> </Navbar.Brand>
          <Nav className=" d-flex align-items-center">
            <Nav.Link href="#home">  Quienes Somos   </Nav.Link>
            <Nav.Link href="#features">  Bancos  </Nav.Link>
            <Nav.Link href="#pricing">  Bebederos </Nav.Link>
            <Nav.Link href="#pricing">   <CartWidget/>     </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;