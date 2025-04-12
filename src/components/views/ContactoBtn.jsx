import { IoLogoWhatsapp } from "react-icons/io5";

const ContactoBtn = () => {
   
        const numeroWhatsApp = "5493855098209"; // Reemplaza con tu número incluyendo código de país (Ej: 5493811234567)
        const mensaje = encodeURIComponent("¡Hola! Tengo una consulta sobre Psicoterapia."); // Mensaje opcional
    
        const handleClick = () => {
            window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, "_blank");
        };
    return (
        <div>
             <button className="btn-contacto fw-semibold mb-4"  onClick={handleClick}> <IoLogoWhatsapp className="fs-4 me-1 mb-1" />Entrar en contacto</button>
        </div>
    );
};

export default ContactoBtn;