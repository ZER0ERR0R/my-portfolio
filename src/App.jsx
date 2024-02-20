import React, { useContext } from "react";
import Container from "./components/Container";
import { DataContext } from "./components/Context/DataContext";
import Main from "./components/Body/Main";
import DarkModeBtn from "./components/Header/DarkModeBtn";



const App = () => {
  
  return (
    <>
      <Container>
        <Main/>
        <DarkModeBtn/>
      </Container>
    </>
  );
};

export default App;
