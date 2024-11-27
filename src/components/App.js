import React, { useState} from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import "./styles.css"

function App() {
  const [selectedContinentColor, setSelectedContinentColor] = useState(null);

  return (
    <>
      <Header setSelectedContinentColor={setSelectedContinentColor}/>
      <Main selectedContinentColor={selectedContinentColor}/>    
    </>
  );
}

export default App;