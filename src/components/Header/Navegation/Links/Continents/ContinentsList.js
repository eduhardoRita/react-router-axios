import React, { useEffect, useState } from "react";
import useAxios from "../../../../../hooks/useAxios";
import "../Continents/styles.css"

const ContinentsList = ({ continent }) => {

    const [url, setUrl] = useState('');
    const [ selectedContinent, setSelectedContinent ] = useState(null);
    const { response, error, loading } = useAxios(url);

    useEffect(() => {
        if (continent) {
            setUrl(continent.url);
            setSelectedContinent(continent);
        }
    }, [continent]);

    const name = continent?.name;

    console.log('Response:', response);
    console.log('Error:', error);
    console.log('Loading:', loading);

    
    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error:{error.message}</p>
    return (
        <article className="main__article">
            <h2>Paises de: {name}</h2>
            {response ? (
                <section className="main__art-sect">
                    {response.map((country) => (
                        <div key={country.cca2} className="country-card">
                            <img className="country-flag" src={country.flags.png} alt= {`Bandera de ${country.name.common}`}/>
                            <ul>
                                <li>Pais: {country.name.common}</li>
                            {country.capital && (
                                <li>Capital: {country.capital[0]}</li>
                            )}
                                <li>Poblacion: {country.population}</li>
                                <li>Lenguaje: {Object.values(country.languages)[0]}</li>
                            </ul>
                        </div>
                    ))}
                </section>    
            ) : (
                null
            )}
        </article>
    );
};

export default ContinentsList;
