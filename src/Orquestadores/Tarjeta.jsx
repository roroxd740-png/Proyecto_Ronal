import '../Style/Tarjeta.css'
import Nombre from '../Componentes/Tarjeta/Nombre'
import Descripcion from '../Componentes/Tarjeta/Descripcion'
import Imagen from '../Componentes/Tarjeta/Imagen'

export default function Tarjeta({ title, img, descripcion, variante, fondo, borde, audio }) {
  const claseTarjeta = variante ? `Centrar ${variante}` : 'Centrar';

  const estiloTarjeta = {
    ...(fondo && { backgroundColor: fondo }),
    ...(borde && { borderColor: borde })
  };

  return (
    // data-fondo activa en el CSS el color del título según el fondo elegido
    <div
      className={claseTarjeta}
      style={estiloTarjeta}
      data-fondo={fondo?.toLowerCase()}
    >
      <Imagen img={img} />

      <div className="Orga">
        <Nombre title={title} />
        <Descripcion descripcion={descripcion} />

        {audio && (
          <div className="reproductor-underground">
            <span className="etiqueta-audio">Play</span>
            <audio controls src={audio} className="audio-rap"></audio>
          </div>
        )}
      </div>
    </div>
  );
}