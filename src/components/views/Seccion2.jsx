import { Col, Container, Row } from "react-bootstrap";

const Seccion2 = () => {
  return (
    <section className="text-center mt-5 mb-3" id="pf">
      <h2 className="playfair-display mb-4">Preguntas Frecuentes</h2>
      
      <Container className="poppins-thin">
        <Row>
          <Col sm={6} md={4}>
            <h5 className=" fw-semibold fs-6">
              {" "}
              ¿Qué necesito para hacer terapia?
            </h5>{" "}
            <p className="beneficios p-1 d-flex justify-content-center align-items-center">
              Puedes tomar sesiones conmigo desde cualquier parte del mundo.
              Únicamente debes disponer de internet y un espacio privado.
            </p>
          </Col>
          <Col sm={6} md={4}>
            {" "}
            <h5 className=" fw-semibold fs-6">
              {" "}
              ¿En qué consisten las sesiones?
            </h5>
            <p className="beneficios p-1 d-flex justify-content-center align-items-center">
              Una sesión de Psicoterapia es un espacio seguro y confidencial de
              diálogo 1 a 1 que dura aproximadamente 45 minutos . La frecuencia,
              objetivos y detalles se ajustan a cada caso.
            </p>
          </Col>
          <Col sm={6} md={4}>
            <h5 className=" fw-semibold fs-6">
              ¿En qué consiste la entrevista gratuita?
            </h5>
            <p className="beneficios p-1 d-flex justify-content-center align-items-center">
              Ofrezco a nuevos pacientes una primera entrevista sin costo en la
              que nos conocemos y discutimos tu motivo de consulta. La apertura
              de nuevas entrevistas está sujeta a mi disponibilidad en ese
              momento.
            </p>
          </Col>
          <Col sm={6} md={{span:4, offset:4}}>
            {" "}
            <h5 className=" fw-semibold fs-6">
              ¿Cuáles son los beneficios de hacer terapia?
            </h5>
            <p className="beneficios p-1 d-flex justify-content-center align-items-center">
              {" "}
              Las personas que hacen terapia reciben acompañamiento profesional
              para transitar procesos y situaciones difíciles, simultáneamente
              es un espacio en el que se cultiva el autoconocimiento y la
              responsabilidad personal respecto al deseo y la propia vida.
            </p>
          </Col>
          <Col sm={6} md={4}>
            {" "}
            
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default Seccion2;
