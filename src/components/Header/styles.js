import styled from "styled-components";

const HeaderStyle = styled.header`
    width: 100%;
`;

const SectionHeader = styled.section`
    width: 100%;
    background-image: url("https://static.vecteezy.com/system/resources/previews/002/650/167/non_2x/world-map-with-multicolor-continent-and-modern-simple-cartoon-line-design-vector.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

const MainImage = styled.img`
    display: block;
    margin: 0 auto;   
    width: 200px;            
    margin-bottom: 50px;
    padding-top: 220px;
`;

const Title = styled.h1`
    color: #e10407;
    font-family: "Sour Gummy", Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    font-size: 4rem;
    font-weight: 900;
    letter-spacing: 5px;
    text-align: center;
    padding-bottom: 25px;
    margin-top: -70px;
    margin-bottom: 0;
    text-shadow: -6px 0px 2px #000000;
`;
                
export {HeaderStyle, SectionHeader, MainImage, Title};