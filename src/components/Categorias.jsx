import React from 'react';
import Footer from './Footer';
import Card from './Card';
import { Link } from 'react-router-dom';
import Articulos from '../assets/articuloss.jpg';
import Celulares from '../assets/Celularess.jpg';
import fondologin from '../assets/fondologin.jpg';


const CardCategorias = ({ backgroundImage, title }) => {
  return (
    <>
      <div
        className="w-full h-[50px] bg-cover bg-center mb-10 rounded-lg flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Categorías 
          </h1>
        </div>
      </div>
      
      <div className="container mx-auto mt-12"> {/* Agregamos el margen top (mt-12) */}


      
        <div className="-mx-4 flex flex-">
          <div className="w-full px-4 md:w-1/2 ">
            <Link to="/celulares">
              <Card
                nombre="Celulares" // Ajustamos el nombre para la primera tarjeta
                imagen={Celulares} // Usamos la variable Celulares para la imagen
              />
            </Link>



            

          </div>
          <div className="w-full px-4 md:w-1/2">


            <Link to="/Articulos">
              <Card
                nombre="Artículos" // Ajustamos el nombre para la segunda tarjeta
                imagen={Articulos} // Usamos la variable Articulos para la imagen
              />
            </Link>


           

          </div>
        </div>
      </div>
      <Footer></Footer>
          </>
  );
};

export default CardCategorias;
