import React, { useState } from "react";
import { ContinentLink, StyleNav } from "./style";


const continents = [
  { name: "Asia", url: "https://restcountries.com/v3.1/region/asia", color: "#eb6a57"},
  { name: "Africa", url: "https://restcountries.com/v3.1/region/africa", color: "#9265b6"},
  { name: "North America", url: "https://restcountries.com/v3.1/region/north america", color: "#53abd1"},
  { name: "South America", url: "https://restcountries.com/v3.1/region/south america", color:"#f7d967"},
  { name: "Europa", url: "https://restcountries.com/v3.1/region/europe", color:"#5fbb70" },
  { name: "Oceania", url: "https://restcountries.com/v3.1/region/oceania", color:"#a28e83"},
];

const Navigation = ({setSelectedContinentColor}) => {
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedContinentIndex, setSelectedContinentIndex] = useState(null);

  const handleClick = (continent, index) => {
    setSelectedContinent(continent);

    setSelectedContinentColor(continent.color);

    setSelectedContinentIndex(index);
  };
    
  return (
    <StyleNav>
      {continents.map((continent, index) => (
        <ContinentLink key={continent.name}
        className="continent-link"
        data-index={index}
        to={`/${continent.name}`}
        onClick={() => handleClick(continent, index)}
        background={continent.color} 
        isSelected={selectedContinentIndex === index}
        >
          {continent.name}
        </ContinentLink>
      ))}
    </StyleNav>
  );
};

export default Navigation;
