import React from "react";
import { Route, Routes } from "react-router-dom";
import ContinentsList from "./Header/Navegation/Links/Continents/ContinentsList";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/asia"
        element={<ContinentsList continent={{ name: "Asia", url: "https://restcountries.com/v3.1/region/asia" }} />}
      />
      <Route
        path="/africa"
        element={<ContinentsList continent={{ name: "Africa", url: "https://restcountries.com/v3.1/region/africa" }} />}
      />
      <Route
        path="/north america"
        element={<ContinentsList continent={{ name: "North America", url: "https://restcountries.com/v3.1/region/north america" }} />}
      />
      <Route
        path="/south america"
        element={<ContinentsList continent={{ name: "South America", url: "https://restcountries.com/v3.1/region/south america" }} />}
      />
      <Route
        path="/Europa"
        element={<ContinentsList continent={{ name: "Europa", url: "https://restcountries.com/v3.1/region/europe" }} />}
      />
      <Route
        path="/oceania"
        element={<ContinentsList continent={{ name: "Oceania", url: "https://restcountries.com/v3.1/region/oceania" }} />}
      />
    </Routes>
  );
};

export default Router;