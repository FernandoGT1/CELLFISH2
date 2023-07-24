import React from 'react';
import Footer from './Footer';
import Card from './Card';
import fondologin from '../assets/fondologin.jpg';
import Cargadores from '../assets/cargadores.jpg';
import Cables3 from '../assets/Cables3.jpg';




const Articulos = ({ backgroundImage, title }) => {
  return (
    <>
    <div
      className="w-full h-[50px] bg-cover bg-center mb-10 rounded-lg flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >




<div className="text-center">
          <h1 className="text-4xl font-bold">
            Articulos
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto mt-12"> {/* Agregamos el margen top (mt-12) */}


      <div className="-mx-4 flex flex-">

          <div className="w-full px-4 md:w-1/2 ">





        
              <Card
                nombre="Audifonos" // Ajustamos el nombre para la primera tarjeta
                imagen={fondologin} // Usamos la variable Celulares para la imagen
              />

<Card
                nombre="Cargadores" // Ajustamos el nombre para la primera tarjeta
                imagen={Cargadores} // Usamos la variable Celulares para la imagen
              />
           

          </div>
          <div className="w-full px-4 md:w-1/2">


            
          <Card
                nombre="Cables" // Ajustamos el nombre para la primera tarjeta
                imagen={Cables3} // Usamos la variable Celulares para la imagen
              />














</div>
        </div>

      <h2 className="text-4xl font-bold text-black">{title}</h2>
    </div>
    <Footer></Footer>  
    </>
  );
};

export default Articulos ;
