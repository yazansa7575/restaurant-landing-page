import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoImage from '../../../assets/image/logo.png';
import './NavBar.css';


function NavBar() {
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand href="#home" className='imageFather'><img src={logoImage} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto nav">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                        <Nav.Link href="#pricing">Explore Foods</Nav.Link>
                        <Nav.Link href="#pricing">Reviews</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                    <a href='./' className='phone-number'>1800 678 352</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar