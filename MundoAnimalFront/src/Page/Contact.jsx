import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import MapComponent from "../Components/MapComponent";


const Contact = () => {
  return (
    <div className="container-contact">
        <section className="section-contact">
      <h1>DONDE ENCONTRARNOS</h1>
      <div>
        <div>
          <FontAwesomeIcon className="icon" icon={faWhatsapp} />
          <h3>Teléfono de contacto</h3>
          <p>091576729</p>          
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faLocationDot} />
          <h3>Encontranos en nuestras sucursales:</h3>             
          <p>Camino Cibils 5780 esq. Primera al Norte</p>
          <MapComponent ubicacion={[-34.850565, -56.271437]} />
          <p>Grecia 3650 esq. Ecuador</p>
          <MapComponent ubicacion={[-34.886236, -56.248877]} />
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faDoorOpen} />
          <h3>Horarios de atención:</h3>
          <p className="sucursal">Sucursal Cno. Cibils:</p>
          <p>Lunes a viernes de 8 a 19 horas.</p>
          <p>Sabados de 8 a 14 horas.</p>
          <p className="sucursal">Sucursal Grecia:</p>
          <p>Lunes a viernes de 9 a 18 horas.</p>
          <p>Sabados de 9 a 14 horas.</p>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Contact;
