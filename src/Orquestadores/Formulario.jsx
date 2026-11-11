import '../Style/Formulario.css'
import Campos from "../Componentes/Formulario/Campos";
import Boton from "../Componentes/Formulario/Boton";
import Tarjeta from './Tarjeta'
import useFormulario from '../Hook/useFormulario';

const Etiquetas = [
    { etiqueta: "Nombre", tipo: "text", holder: "Ana" },
    { etiqueta: "Imagen", tipo: "text", holder: "URL" },
    { etiqueta: "Descripcion", tipo: "text", holder: "Descripcion" },
    { etiqueta: "Fondo", tipo: "text", holder: "Ej: amarillo" },
    { etiqueta: "Borde", tipo: "text", holder: "Ej: rojo" }
]

const Botones = [
    { tipo: "submit", nombre: "Guardar" },
    { tipo: "reset", nombre: "Limpiar" },
    { tipo: "button", nombre: "Volver" }
]

const coloresEspanol = {
    "rojo": "red",
    "azul": "blue",
    "amarillo": "yellow",
    "verde": "green",
    "morado": "purple",
    "rosa": "pink",
    "naranja": "orange",
    "negro": "black",
    "blanco": "white",
    "gris": "gray"
};

export default function Formulario({ agregar }) {
    const { datos, onCambio, onEnviar, onReset, onVolver } = useFormulario({ agregar });

    return (
        <div className='centrar'>
            <form onSubmit={onEnviar} onReset={onReset}>
                <div>
                    {Etiquetas.map((campo) => (
                        <Campos
                            key={campo.etiqueta}
                            etiqueta={campo.etiqueta}
                            tipo={campo.tipo}
                            holder={campo.holder}
                            valor={datos[campo.etiqueta]}
                            onCambio={onCambio}
                        />
                    ))}
                </div>
                <div className='campos'>
                    {Botones.map((boton) => (
                        <Boton
                            key={boton.nombre}
                            tipo={boton.tipo}
                            nombre={boton.nombre}
                            onClick={boton.nombre === "Volver" ? onVolver : undefined}
                        />
                    ))}
                </div>
            </form>
            <Tarjeta
                title={datos.Nombre}
                img={datos.Imagen}
                descripcion={datos.Descripcion}
                fondo={coloresEspanol[datos.Fondo.toLowerCase().trim()] || datos.Fondo}
                borde={coloresEspanol[datos.Borde.toLowerCase().trim()] || datos.Borde}
            />
        </div>
    )
}