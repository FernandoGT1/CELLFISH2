import React from 'react';
import Footer from './Footer';
import Card from './Card';
import fondologin from '../assets/fondologin.jpg';





const Celulares = ({ backgroundImage, title }) => {
  return (
    <>
    <div
      className="w-full h-[50px] bg-cover bg-center mb-10 rounded-lg flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

<div className="text-center">
          <h1 className="text-4xl font-bold">
            Celulares
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto mt-12"> {/* Agregamos el margen top (mt-12) */}

      <div className="-mx-4 flex flex-">

          <div className="w-full px-4 md:w-1/2 ">



          <Card
           nombre="Celulares" // Ajustamos el nombre para la primera tarjeta
                imagen={fondologin} // Usamos la variable Celulares para la imagen
              />


        
              <Card
                nombre="Celulares" // Ajustamos el nombre para la primera tarjeta
                imagen={fondologin} // Usamos la variable Celulares para la imagen
              />
           

          </div>
          <div className="w-full px-4 md:w-1/2">


              <Card
           nombre="Celulares" // Ajustamos el nombre para la primera tarjeta
                imagen={fondologin} // Usamos la variable Celulares para la imagen
              />


           <Card
           nombre="Celulares" // Ajustamos el nombre para la primera tarjeta
                imagen={fondologin} // Usamos la variable Celulares para la imagen
              />




</div>
        </div>
      <h2 className="text-4xl font-bold text-white">{title}</h2>
    </div>
    <Footer></Footer>  
    </>
  );
};

export default Celulares;
