import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleNav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const ContinentLink = styled(Link)`
    &[data-index="0"] {
        background-color: #eb6a57;
        color: #000000;
        text-shadow: -2px 0px 1px #ffffff;
        width: 100%;
        font-family: "Cinzel Decorative", Arial, Helvetica, sans-serif;
        font-size: 1.25rem;
        font-weight: 900;
        border: 2px solid #000000;   
        border-bottom: ${({ isSelected }) => isSelected ? 'none' : '2px solid #000000'};
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &[data-index="1"] {
        background-color: #9265b6;
        color: #000000;
        text-shadow: -2px 0px 1px #ffffff;
        width: 100%;
        text-align: center;
        font-family: "Cinzel Decorative", Arial, Helvetica, sans-serif;
        font-size: 1.25rem;
        font-weight: 900;
        border: 2px solid #000000;        
        border-bottom: ${({ isSelected }) => isSelected ? 'none' : '2px solid #000000'};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &[data-index="2"] {
        background-color: #53abd1;
        color: #000000;
        text-shadow: -2px 0px 1px #ffffff;
        width: 100%;
        text-align: center;
        font-family: "Cinzel Decorative", Arial, Helvetica, sans-serif;
        font-size: 1.25rem;
        font-weight: 900;
        border: 2px solid #000000;        
        border-bottom: ${({ isSelected }) => isSelected ? 'none' : '2px solid #000000'};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &[data-index="3"] {
        background-color: #f7d967;
        color: #000000;
        text-shadow: -2px 0px 1px #ffffff;
        width: 100%;
        text-align: center;
        font-family: "Cinzel Decorative", Arial, Helvetica, sans-serif;
        font-size: 1.25rem;
        font-weight: 900;
        border: 2px solid #000000;        
        border-bottom: ${({ isSelected }) => isSelected ? 'none' : '2px solid #000000'};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &[data-index="4"] {
        background-color: #5fbb70;
        color: #000000;
        text-shadow: -2px 0px 1px #ffffff;
        width: 100%;
        text-align: center;
        font-family: "Cinzel Decorative", Arial, Helvetica, sans-serif;
        font-size: 1.25rem;
        font-weight: 900;
        border: 2px solid #000000;        
        border-bottom: ${({ isSelected }) => isSelected ? 'none' : '2px solid #000000'};
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &[data-index="5"] {
        background-color: #a28e83;
        color: #000000;
        text-shadow: -2px 0px 1px #ffffff;
        width: 100%;
        text-align: center;
        font-family: "Cinzel Decorative", Arial, Helvetica, sans-serif;
        font-size: 1.25rem;
        font-weight: 900;
        border: 2px solid #000000;        
        border-bottom: ${({ isSelected }) => isSelected ? 'none' : '2px solid #000000'};
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export {StyleNav, ContinentLink};