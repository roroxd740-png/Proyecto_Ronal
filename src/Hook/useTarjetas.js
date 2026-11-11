import { useState } from "react";
import rap from ("./data.json")

export default function useTarjetas(){
    const [Tarjetas,setTarjetas]=useState(rap)
    const agregar=(nueva)=>setTarjetas([...Tarjetas,nueva])
    return {Tarjetas,agregar}
}