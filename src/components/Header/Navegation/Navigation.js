import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Navegation/styles.css"

const continents = [
  { name: "Asia", url: "https://restcountries.com/v3.1/region/asia" },
  { name: "Africa", url: "https://restcountries.com/v3.1/region/africa" },
  { name: "America", url: "https://restcountries.com/v3.1/region/america" },
  { name: "Antartida", url: "https://restcountries.com/v3.1/region/antarctica"},
  { name: "Europa", url: "https://restcountries.com/v3.1/region/europe" },
  { name: "Oceania", url: "https://restcountries.com/v3.1/region/oceania"},
  ];

const Navigation = () => {
  const [selectedContinent, setSelectedContinent] = useState(null);
  const location = useLocation();

  const handleClick = (continent, index) => {
    setSelectedContinent(continent);
  };

  return (
    <nav>
      {continents.map((continent, index) => (
        <Link
          key={continent.name}
          className={`continent-${index}`}
          to={`/${continent.name}`}
          onClick={() => handleClick(continent)}
        >
          {continent.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
