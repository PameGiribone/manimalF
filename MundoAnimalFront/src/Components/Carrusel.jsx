import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cards = [
    {
      title: 'Plantas',
      content: `Identifica las necesidades específicas de cada tipo de planta: algunas necesitan mucha luz solar directa,
       mientras que otras prosperan en sombra parcial. El riego debe ser consistente pero no excesivo, ya que tanto la 
       falta como el exceso de agua pueden ser perjudiciales. Asegúrate de que las raíces tengan suficiente espacio para expandirse. 
       Controla plagas y enfermedades regularmente y, si es necesario, utiliza remedios naturales para proteger tus plantas.`,
      img: `https://image.lexica.art/full_webp/0d8d9303-3de6-450b-a086-be1a82c03504`,
    },
    {
      title: 'Alimentación balanceada',
      content: `Una dieta equilibrada es clave para la salud de tus mascotas. Necesitan proteínas,
            grasas, carbohidratos, vitaminas y minerales en proporciones adecuadas. Las proteínas de alta calidad ayudan a mantener músculos 
            fuertes, mientras que las grasas saludables son esenciales para la energía y el brillo del pelaje. No olvides los carbohidratos, 
            que proporcionan energía rápida, y las vitaminas y minerales, que apoyan funciones corporales vitales. 
            Evita los alimentos procesados y ricos en azúcares.`,
      img: `https://image.lexica.art/full_webp/27fbb3e2-1667-4014-850c-ecd8a6f08199`
    },
    {
      title: 'Hidratación',
      content:  `Mantener a tus mascotas bien hidratadas es crucial. Los perros y gatos deben tener acceso constante a agua fresca y limpia. 
            La deshidratación puede llevar a problemas serios de salud como insuficiencia renal, especialmente en gatos. 
            Cambia el agua frecuentemente y limpia los recipientes para evitar la acumulación de bacterias. En climas calurosos, 
            aumenta la cantidad de agua disponible y considera añadir alimentos húmedos a su dieta para contribuir a la ingesta de líquidos.`,
      img: `https://image.lexica.art/full_webp/4904bcb4-89ef-4628-89a0-a8d9273cb42f`	    
    },
  ];

  return (
    <div className="carrusel">
      <span>NUETROS CONSEJOS</span>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img className="img-tips" src={card.img} alt="" />            
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrusel;
