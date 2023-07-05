import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import './Header.css'


function Header() {
    return (
        <Navbar data-bs-theme="dark" className="bg-body-tertiary header">
            <Container>
                <Navbar.Brand  href="/"><h3 className="logo">FreeToPlay.com</h3></Navbar.Brand>
                <Navbar.Toggle />
            </Container>
        </Navbar>
    );
}

export default Header;
