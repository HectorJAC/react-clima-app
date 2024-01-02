import useClima from "../hooks/useClima";

const Resultado = () => {
    const {resultado} = useClima();

    // Grados Kelvin
    const kelvin = 273.15;
  
    return (
        <div className="contenedor clima">
            <h2>El clima de {resultado.name} es: </h2>
            <p>
                {parseInt(resultado.main.temp - kelvin)} <span> &deg;C </span>
            </p>

            <div className="temp_min_max">
                <p>
                    Min: {parseInt(resultado.main.temp_min - kelvin)} <span> &deg;C </span>
                </p>

                <p>
                    Max: {parseInt(resultado.main.temp_max - kelvin)} <span> &deg;C </span>
                </p>
            </div>
        </div>
    );
};

export default Resultado;