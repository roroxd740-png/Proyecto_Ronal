import { useState } from "react";
import { useNavigate } from "react-router-dom";

const inicial = { Nombre: '', Imagen: '', Descripcion: '', Fondo: '', Borde: '' }
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

export default function useFormulario({ agregar }) {
    const navigate = useNavigate();
    const [datos, setDatos] = useState(inicial);

    const cambiar = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
    };

    const enviar = (e) => {
        e.preventDefault();

        const fondoTraducido = coloresEspanol[datos.Fondo?.toLowerCase().trim()] || datos.Fondo;
        const bordeTraducido = coloresEspanol[datos.Borde?.toLowerCase().trim()] || datos.Borde;

        agregar({
            title: datos.Nombre,
            img: datos.Imagen,
            descripcion: datos.Descripcion,
            fondo: fondoTraducido,
            borde: bordeTraducido
        });

        navigate('/Tarjetas');
    };

    return {
        datos,
        onCambio: cambiar,
        onEnviar: enviar,
        onReset: () => setDatos(inicial),
        onVolver: () => navigate('/Tarjetas')
    };
}