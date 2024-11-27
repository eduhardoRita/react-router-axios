import React, { useState, useEffect } from "react";
import Router from "../router";
import { StyleMain } from "./style";
import Content from "./ContentMain/Content";
import { useLocation } from "react-router-dom";

const Main = ({ selectedContinentColor }) => {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      setShowContent(true);
    } else {
      setShowContent(false);
    }
  }, [location.pathname]);

  return (
    <StyleMain background={selectedContinentColor}>
      {showContent ? (
        <Content />
      ) : (
        <Router />
      )}
    </StyleMain>
  );
};

export default Main;
