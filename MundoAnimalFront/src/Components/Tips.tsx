import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MagicMotion } from "react-magic-motion";
import { faCat, faDog } from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";
 
export default function Accordion(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MagicMotion
      transition={{ type: "spring", stiffness: 180, damping: 20, mass: 1.1 }}
    >
      <div
        style={{
          backgroundColor: "#052560",
          padding: "1rem",
          borderRadius: 12,
          margin: "1rem 0",
          overflow: "hidden",
        }}
      >
        <button
          style={{
            fontSize: "0.9em",
            fontWeight: 500,
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            
            
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          DESCUBRÍ NUESTROS CONSEJOS
            <svg
              key="exclude"
              style={{
                transform: `rotate(${isOpen ? 180 : 0}deg)`,
                transition: "320ms ease-in-out",
                
              }}
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 10L15.6714 21L27.5 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
        </button>
        {isOpen && (
          <div
            style={{
              gap: "1.5rem",
              display: "flex",
              flexDirection: "column",
              marginTop: "1rem",
              fontSize: "1em",
              padding: "1rem",
              color: "white",
              
            }}
          >
            <div>
            <FontAwesomeIcon icon={faDog} /> Una dieta equilibrada es clave para la salud de tus mascotas. Necesitan proteínas,
            grasas, carbohidratos, vitaminas y minerales en proporciones adecuadas. Las proteínas de alta calidad ayudan a mantener músculos 
            fuertes, mientras que las grasas saludables son esenciales para la energía y el brillo del pelaje. No olvides los carbohidratos, 
            que proporcionan energía rápida, y las vitaminas y minerales, que apoyan funciones corporales vitales. 
            Evita los alimentos procesados y ricos en azúcares.
            </div>
            <div>
            <FontAwesomeIcon icon={faCat} /> Mantener a tus mascotas bien hidratadas es crucial. Los perros y gatos deben tener acceso constante a agua fresca y limpia. 
            La deshidratación puede llevar a problemas serios de salud como insuficiencia renal, especialmente en gatos. 
            Cambia el agua frecuentemente y limpia los recipientes para evitar la acumulación de bacterias. En climas calurosos, 
            aumenta la cantidad de agua disponible y considera añadir alimentos húmedos a su dieta para contribuir a la ingesta de líquidos.             
            </div>
            <div>
            <FontAwesomeIcon icon={faPagelines} /> Las plantas necesitan luz, agua, nutrientes y espacio para crecer adecuadamente. 
            Identifica las necesidades específicas de cada tipo de planta: algunas necesitan mucha luz solar directa, 
            mientras que otras prosperan en sombra parcial. El riego debe ser consistente pero no excesivo, ya que tanto la falta como el 
            exceso de agua pueden ser perjudiciales. Asegúrate de que las raíces tengan suficiente espacio para expandirse.
            Controla plagas y enfermedades regularmente y, si es necesario, utiliza remedios naturales para proteger tus plantas.
            </div>
          </div>
        )}
      </div>
    </MagicMotion>
  );
}