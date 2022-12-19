import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "./style.css";
function Navbar1() {
    
  return (
    <>
    
      <Navbar className="nav"  expand="lg">
        <Container className="container">
            <div className="logo"><img src={require('../../src/images/LOGO.png')} alt="logo" /></div>
        
        <Navbar.Brand href="#home" className="name">Santipur Science Club</Navbar.Brand>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="navElements">Home</Nav.Link>
            <Nav.Link href="#features" className="navElements">About</Nav.Link>
            <Nav.Link href="#pricing" className="navElements">Our purpose</Nav.Link>
            <Nav.Link href="#pricing" className="navElements">Join Us</Nav.Link>
            <Nav.Link href="#pricing" className="navElements">Donate</Nav.Link>
            <Button href="#" className="navElements">sign in</Button>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

export default Navbar1;