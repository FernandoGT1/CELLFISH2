import React, { useState } from "react";

const MapaDirecciones = () => {
  const [seccionesVisitadas, setSeccionesVisitadas] = useState([]);

  const agregarSeccionVisitada = (seccion) => {
    setSeccionesVisitadas((prevSecciones) => [...prevSecciones, seccion]);
  };

  return (
    <div className="relative p-4 mt-8 z-10">
      {/* <h3 className="text-lg font-semibold mb-2">Secciones visitadas:</h3> */}
      <ul className="list-disc pl-4">
        {seccionesVisitadas.map((seccion, index) => (
          <li key={index}>{seccion} {index < seccionesVisitadas.length - 1 && <span className="ml-2 mr-2">{'>'}</span>}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => agregarSeccionVisitada("Inicio")}
          className="text-black bg-transparent hover:bg-transparent focus:outline-none"
        >
          Inicio
        </button>
        <button
          onClick={() => agregarSeccionVisitada("Sección 1")}
          className="text-black bg-transparent hover:bg-transparent focus:outline-none"
        >
          Sección 1
        </button>
        <button
          onClick={() => agregarSeccionVisitada("Sección 2")}
          className="text-black bg-transparent hover:bg-transparent focus:outline-none"
        >
          Sección 2
        </button>
      </div>
    </div>
  );
};

export default MapaDirecciones;
