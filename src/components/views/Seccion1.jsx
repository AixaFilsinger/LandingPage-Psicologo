
import { Container, Row, Col } from "react-bootstrap";
import samuel from "../../assets/samuel1.jpg"
import Menu from "../common/Menu";
import ContactoBtn from "./ContactoBtn";
const Seccion1 = () => {
    return (
        <section className="seccion1" id="home">
            <Menu></Menu>
            <Container>
             <Row>
                <Col  sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="text-light playfair-display">¡Bienvenido! Soy Samuel, <br />
                Psicólogo migrante
                </h1>
                <p className="text-light poppins-thin ms-5"> Un apasionado por ayudar a las personas a 
                    encontrar su camino</p>
                    <ContactoBtn></ContactoBtn>
                   
                </Col>
                <Col sm={12} md={6} className="d-flex flex-column justify-content-center align-items-center ">
                <img src={samuel} alt=""  className="img-fluid imagen"/>
               
                </Col>
             </Row>
            </Container>
            
        </section>
    );
};

export default Seccion1;