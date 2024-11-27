import styled from "styled-components";

const StyleMain = styled.main`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: ${({ background }) => background || "#0000005c"};
`;

const SubTitle = styled.h2`
    font-family: "Edu AU VIC WA NT Pre", cursiv, Arial, Helvetica, sans-serif;
    font-size: 2rem;
    color: #e7d9d9;
    text-shadow: 4px 0px 2px #000000;
`;

const DescriptionText = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
`;

export {StyleMain, SubTitle, DescriptionText};