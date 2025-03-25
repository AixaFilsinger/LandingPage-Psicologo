import Accordion from 'react-bootstrap/Accordion';
const PreguntasFrecuentes = () => {
    return (
        <section className="h-75 container-sm mx-auto text-center mt-5 mb-5" id='pf'>
            <h3 className="fs-2 mb-4 text-body-secondary">Preguntas Frecuentes</h3>
            <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0" className='mb-4'>
        <Accordion.Header ><h5 className='fst-italic fw-semibold'> ¿Qué necesito para hacer terapia?</h5></Accordion.Header>
        <Accordion.Body  className='nunito fs-5'>
        Puedes tomar sesiones conmigo desde cualquier parte del mundo.
         Únicamente debes disponer de internet y un espacio privado.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='mb-4'>
        <Accordion.Header><h5 className='fst-italic fw-semibold'> ¿En qué consisten las sesiones?</h5></Accordion.Header>
        <Accordion.Body  className='nunito fs-5'>
        Una sesión de Psicoterapia es un espacio seguro y confidencial de 
        diálogo 1 a 1 que dura aproximadamente 45 minutos . La frecuencia,
         objetivos y detalles se ajustan a cada caso.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='mb-4'>
        <Accordion.Header><h5 className='fst-italic fw-semibold'>¿En qué consiste la entrevista gratuita?</h5>
        </Accordion.Header>
        <Accordion.Body  className='nunito fs-5'>
        Ofrezco a nuevos pacientes una primera entrevista sin costo en la que nos conocemos
         y discutimos tu motivo de consulta.
         La apertura de nuevas entrevistas está sujeta a mi disponibilidad en ese momento.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='mb-4 '>
        <Accordion.Header> <h5 className='fst-italic fw-semibold'>¿Cuáles son los beneficios de hacer terapia?</h5></Accordion.Header>
        <Accordion.Body  className='nunito fs-5'>
        Las personas que hacen terapia reciben acompañamiento profesional para transitar procesos
         y situaciones difíciles, simultáneamente es un espacio
         en el que se cultiva el autoconocimiento y la responsabilidad personal respecto al deseo
          y la propia vida.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            
        </section>
    );
};

export default PreguntasFrecuentes;