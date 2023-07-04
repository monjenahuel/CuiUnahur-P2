import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";


function Header() {
    return (
        <Navbar data-bs-theme="dark" className="bg-body-tertiary header">
            <Container>
                <Navbar.Brand  href="/"><p className="logo">FreeToPlay.com</p></Navbar.Brand>
                <Navbar.Toggle />
            </Container>
        </Navbar>
    );
}

export default Header;
