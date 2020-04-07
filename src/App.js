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
      <Container>
        <h1>Cars Owners</h1>
        <ShowFilteredCars />
        {/* <FilterCars /> */}
        <Div>
          <ShowCars />
        </Div>
      </Container>
    </ContextProvider>
  );
}

export const Container = styled.div`
  width: 100%;
  padding: 2% 0;
  h1 {
    text-align: center;
    padding: 2% 0;
  }
`;

const Div = styled.div`
  width: 95%;
  margin: auto;
  padding: 2.5% 0;
`;

export default App;
