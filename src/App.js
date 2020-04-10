import React, { lazy, Suspense } from "react";
import "./App.css";
import styled from "styled-components";
import { ContextProvider } from "./Context/ContextProvider";
// import ShowCars from "./components/ShowCars/ShowCars";
import ShowFilteredCars from "./components/ShowFilteredCars/ShowFilteredCars";
import { Button } from "semantic-ui-react";
import Loader from "react-loader-spinner";
const ShowCars = lazy(() => import("./components/ShowCars/ShowCars"));

function App() {
  return (
    <ContextProvider>
      <Container>
        <h1>Cars Owners</h1>
        {/* <FilterCars /> */}
        <ShowFilteredCars />
        <Div>
          <Suspense
            fallback={
              <Loader
                type='Puff'
                color='#00BFFF'
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            }
          >
            <ShowCars />
          </Suspense>
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
