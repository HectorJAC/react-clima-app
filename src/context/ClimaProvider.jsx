/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
//import axios from "axios";

const Climacontext = createContext();

export const ClimaProvider = ({ children }) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: "",
    });

    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        });
    };

    const consultarClima = async (datos) => {
        try {
            const {ciudad, pais} = datos;

            const appId = import.meta.env.VITE_API_KEY;
            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

            console.log(url);
            //const { data } = await axios.get(url);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Climacontext.Provider value={{
            busqueda,
            datosBusqueda,
            consultarClima
        }}>
            {children}
        </Climacontext.Provider>
    );
};

export default Climacontext;