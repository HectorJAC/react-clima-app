import { useState } from "react";
import useClima from "../hooks/useClima";

const Formulario = () => {
  
    const [ alerta, setAlerta ] = useState('');
    const { busqueda, datosBusqueda, consultarClima } = useClima();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (Object.values(busqueda).includes("")) {
            setAlerta("Todos los campos son obligatorios");
            return;
        }
        setAlerta("");
        consultarClima(busqueda);
    };

    return (
    <div className="contenedor">
        {alerta && <div className="alerta">{alerta}</div>}
        <form onSubmit={handleSubmit} >
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text" 
                    id="ciudad"
                    name="ciudad"
                    onChange={datosBusqueda}
                    value={busqueda.ciudad}
                />
            </div>

            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select
                    id="pais"
                    name="pais"
                    onChange={datosBusqueda}
                    value={busqueda.pais}
                >
                    <option value="">--Seleccione un pais--</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                    <option value="DO">Republica Dominicana</option>
                </select>
            </div>

            <input type="submit" value="Consultar Clima" />
        </form>
    </div>
  )
}

export default Formulario;