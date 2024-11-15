import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import "./styles.css"

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <>
      <Header />
      <Main />    
    </>
  );
}

export default App;