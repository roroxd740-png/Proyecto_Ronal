import Tarjeta from "../Orquestadores/Tarjeta";
import rap from "../data.json";

export default function Tar() {
  return (
    <div className="contenedor-lista">
      {rap.map((item, index) => (
        <Tarjeta 
          key={index}
          title={item.title}
          img={item.img}
          descripcion={item.descripcion}
          bg={item.bg}
          border={item.border}
          colorTitulo={item.colorTitulo}
          audio={item.audio}
        />
      ))}
    </div>
  );
}