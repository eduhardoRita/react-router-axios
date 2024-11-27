import styled from "styled-components";

const ContainerContinents = styled.article`
    width: 100%;
`; 

const SubtitleContainer = styled.h2`
    font-size: 2rem;
    font-family: "Sour Gummy", Arial, Helvetica, sans-serif;
`;

const ContainerContries = styled.section`
    margin: 0 auto;
    width: 95%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 168px;
`;

const Contry = styled.div`
    border: 2px solid #000000;
    background-color: #000000;
`;

const ContryFlag = styled.img`
    width: 350px;
    height: 150px;
    border: 1px solid #ffffff;
    margin: 10px;
`;

const InformationList = styled.ul`
    background-color: #000000;
    margin-bottom: 0;
    padding-bottom: 15px;
`;

const ElementList = styled.li`
    font-size: 1.25rem;
    color: #ffffff;
`;

export {ContainerContinents, SubtitleContainer, ContainerContries, Contry, ContryFlag, InformationList, ElementList};