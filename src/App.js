import React from "react";
import "./App.css";
import styled from "styled-components";
import { ContextProvider } from "./Context/ContextProvider";
import FilterCars from "./components/FilterCars/FilterCars";
import ShowCars from "./components/ShowCars/ShowCars";
import ShowFilteredCars from "./components/ShowFilteredCars/ShowFilteredCars";

function App() {
  return (
    <ContextProvider>
      <ShowFilteredCars />
      <FilterCars />
      <Div>
        <ShowCars />
      </Div>
    </ContextProvider>
  );
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  max-width: 105em;
  padding-top: 5%;
  margin: auto;
`;

const Div = styled.div`
  width: 95%;
  margin: auto;
  padding: 2.5% 0;
`;

export default App;
