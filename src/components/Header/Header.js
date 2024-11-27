import React, {useState} from "react";
import Logo from "../../assets/car-logo.gif";
import Navigation from "../Header/Navegation/Navigation";
import { HeaderStyle, MainImage, SectionHeader, Title } from "./styles";

const Header = ({setSelectedContinentColor}) => {
  return (  
    <HeaderStyle>
      <SectionHeader>
        <MainImage src={Logo}/>
        <Title>CONTINENTES DEL MUNDO Y SUS PAISES</Title>
      </SectionHeader>
      <Navigation setSelectedContinentColor={setSelectedContinentColor}/>
    </HeaderStyle>
  );
};

export default Header;
