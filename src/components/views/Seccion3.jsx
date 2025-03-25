import fotoSm from "../../assets/samuel2.jpg"
import { Container, Row, Col } from "react-bootstrap";
const Seccion3 = () => {
  return (
    <section className="seccion1" id="sobremi">
      <Container>
        <Row className="p-5">
          <Col
            sm={12}
            md={6}
            className="d-flex flex-column justify-content-center align-items-center "
          >
            <img src={fotoSm} alt="" className="img-fluid imagen mb-4" />
          </Col>
          <Col
            sm={12}
            md={6}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <h3 className="text-light playfair-display mb-3">
              Un poco de mi historia
            </h3>
            <p className="text-light poppins-thin">
              Soy un psicólogo migrante, Licenciado en Psicología 
              por la Universidad Central de Venezuela y Maestrando 
              en Salud Familiar y Comunitaria en Argentina.
            </p>
            <p className="text-light poppins-thin">Desde 2021 atiendo personas en todo el mundo a través de la virtualidad.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Seccion3;
