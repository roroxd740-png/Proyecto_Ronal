import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/NotFound.css';

import audioNuevo from '../img/error-cancion.mp3';
import videoMusica from '../img/personaje.mp4';

export default function NotFound() {
  return (
    <div className="fondo-404">
      <div className="caja-404">

        <h1 className="titulo-404">404 - PÁGINA NO ENCONTRADA</h1>

        <p className="subtitulo-404">la pagina no se encontro,soyese con el tema</p>

        <div className="video-404-contenedor">
          <video
            src={videoMusica}
            autoPlay
            loop
            muted
            playsInline
            className="video-404"
          />
        </div>

        <div className="audio-404-contenedor">
          <audio src={audioNuevo} autoPlay loop controls className="audio-404" />
        </div>

        <Link to="/Tarjetas" className="boton-404-link">
          <button type="button" className="boton-404">Volver a las Tarjetas</button>
        </Link>

      </div>
    </div>
  );
}
