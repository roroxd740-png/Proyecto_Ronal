import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotFound from './NotFound';
import Holas from './h';
import Tarjeta from '../Orquestadores/Tarjeta';
import Formulario from '../Orquestadores/Formulario';
import '../Style/Tarjeta.css';

// 4. Importaciones de imágenes
import imgBiggie from '../img/oblivion.jpg';
import imgEazy from '../img/dobleporcion.jpg';
import imgDoom from '../img/granuja.jpg';
import imgTupac from '../img/penya.jpg';
import imgClick from '../img/click.jpg';

import audioBiggie from '../img/oblivion.mp3';
import audioEazy from '../img/dobleporcion.mp3';
import audioDoom from '../img/granuja.mp3';
import audioTupac from '../img/Penyair.mp3';

const raperosIniciales = [
  {
    id: 1,
    title: "Oblivion's Mighty Trash",
    descripcion: "La sangre nueva y fresca de Medellín. Lejos del estilo gansta, su vuelta es el lo-fi, las referencias al skate y la cultura pop, con barras muy ingeniosas y un flow relajado. Un rap alternativo, introspectivo y de parche que revolucionó la nueva escuela.",
    img: imgBiggie,
    audio: audioBiggie,
    variante: "tarjeta-oblivion"
  },
  {
    id: 2,
    title: "Doble Porción",
    descripcion: "Una verdadera institución del rap paisa. La unión de Mañas Ru-Fino y el eterno Métricas Frías (Q.E.P.D.). Su sonido es pura bohemia de barrio: crónicas de la noche, melancolía, excesos y la cotidianidad de las calles sobre ritmos que marcaron a toda una generación.",
    img: imgEazy,
    audio: audioEazy,
    variante: "tarjeta-dobleporcion"
  },
  {
    id: 3,
    title: "Granuja",
    descripcion: "El cerebro oscuro detrás del colectivo Moebiuz. Famoso por su voz profunda, su flow pausado y un cinismo brutal al escribir. Hace rap denso y filosófico, soltando verdades incómodas sobre la sociedad en beats oscuros y llenos de samples que él mismo produce.",
    img: imgDoom,
    audio: audioDoom,
    variante: "tarjeta-granuja"
  },
  {
    id: 4,
    title: "Penyair",
    descripcion: "Nostalgia y boom bap clásico directo desde las calles frías. Su estilo destaca por una pluma muy poética y melancólica, abordando temas de salud mental, luchas personales y la vida de barrio. Es rap crudo, vulnerable y con un mensaje que te pega directo en el pecho.",
    img: imgTupac,
    audio: audioTupac,
    variante: "tarjeta-penyair"
  }
];

export default function App() {
  const [raperos, setRaperos] = useState(raperosIniciales);

  const agregar = (nueva) =>
    setRaperos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), variante: "tarjeta-nueva", ...nueva }
    ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Holas />} />
        <Route
          path="/Tarjetas"
          element={
            <div className="contenedor-principal">
              <h1 className="titulo-pagina">
                <span className="color-amarillo">RAP </span>
                <span className="color-azul">COLOM</span>
                <span className="color-rojo">BIANO</span>
              </h1>

              {raperos.map((rapero) => (
                <Tarjeta
                  key={rapero.id}
                  title={rapero.title}
                  descripcion={rapero.descripcion}
                  img={rapero.img}
                  variante={rapero.variante}
                  audio={rapero.audio}
                  fondo={rapero.fondo}
                  borde={rapero.borde}
                />
              ))}
              <div className="contenedor-boton">
                <Link to="/formulario">
                  <img src={imgClick} alt="Ir al formulario" className="boton-imagen" />
                </Link>
              </div>

            </div>
          }
        />
        <Route path="/formulario" element={<Formulario agregar={agregar} />} />
        <Route path="/holas" element={<Holas />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}