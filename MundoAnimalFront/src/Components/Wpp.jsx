import React, { useState } from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wpp = () => {
  const [isChatOpen, setChatOpen] = useState(false);

  // Mensaje predeterminado
  const defaultMessage = "Estoy interesado en";

  // URL de WhatsApp con mensaje predeterminado
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=91576729&text=${encodeURIComponent(defaultMessage)}&app_absent=0` ;

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <>
      <a className='link-wpp' onClick={toggleChat}>
        <FontAwesomeIcon className='wpp-icon' icon={faWhatsapp} style={{ color: "#ffff" }} />
      </a>
      {isChatOpen && (
        <div className="whatsapp-chat">
          <div className="chat-header">
            <span><b>Bienvenido a Mundo Animal</b></span>
            <button className="close-chat" onClick={toggleChat}>Cerrar</button>
          </div>
          <div className="chat-body">
            <p>¿En qué te podemos ayudar?</p>
            <a href={whatsappUrl} className="start-chat">Iniciar Chat</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Wpp;
