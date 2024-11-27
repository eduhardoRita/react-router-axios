import React, { useEffect, useState } from "react";
import useAxios from "../../../../../hooks/useAxios";
import { ContainerContinents, SubtitleContainer, ContainerContries, Contry, ContryFlag, ElementList, InformationList } from "./style";

const ContinentsList = ({ continent }) => {

    const [url, setUrl] = useState('');
    const [ selectedContinent, setSelectedContinent ] = useState(null);
    const { response, error, loading } = useAxios(url);

    useEffect(() => {
        if (continent.name) {
            setUrl(continent.url);
            setSelectedContinent(continent);
        }
    }, [continent.name]);

    const name = continent?.name;

    console.log('Response:', response);
    console.log('Error:', error);
    console.log('Loading:', loading);

    if (loading) return <p>Cargando...</p>
    if (error) return <p>Error:{error.message}</p>

    return (
        <ContainerContinents>
            <SubtitleContainer>Paises: </SubtitleContainer>
            {response ? (
                <ContainerContries>
                    {response.map((country) => (
                        <Contry key={country.cca2}>
                            <ContryFlag src={country.flags.png} alt= {`Bandera de ${country.name.common}`}/>                            <InformationList>
                                <ElementList>Pais: {country.name.common}</ElementList> 
                            {country.capital && (
                                <ElementList>Capital: {country.capital[0]}</ElementList> 
                            )}
                                <ElementList>Poblacion: {country.population}</ElementList> 
                                <ElementList>Lenguaje: {Object.values(country.languages)[0]}</ElementList>
                            </InformationList>
                        </Contry>
                    ))}
                </ContainerContries>
            ) : (
                null
            )}
        </ContainerContinents>
    );
};

export default ContinentsList;