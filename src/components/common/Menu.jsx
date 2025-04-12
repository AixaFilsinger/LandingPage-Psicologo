import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IoLogoWhatsapp } from "react-icons/io5";
const Menu = () => {
  const numeroWhatsApp = "5493855098209"; // Reemplaza con tu número incluyendo código de país (Ej: 5493811234567)
  const mensaje = encodeURIComponent(
    "¡Hola! Tengo una consulta sobre Psicoterapia."
  );
  const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  const [expanded, setExpanded] = useState(false);
  const handleToggle = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);
  return (
    <header>
       <Navbar expanded={expanded} onToggle={handleToggle} expand="lg" className="poppins-thin mb-3">
      <Container className="mt-3">
        <Navbar.Brand href="#home" className="text-light">
          Samuel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-light"  onClick={closeNavbar}>
              Inicio
            </Nav.Link>
            <Nav.Link href="#sobremi" className="text-light"  onClick={closeNavbar}>
              Sobre Mi
            </Nav.Link>
            <Nav.Link href="#pf" className="text-light"  onClick={closeNavbar}>
              Preguntas frecuentes
            </Nav.Link>
            <Nav.Link
              href={enlaceWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light"
            >
              <IoLogoWhatsapp className="fs-5" />
              Entrar en Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
   
  );
};

export default Menu;
