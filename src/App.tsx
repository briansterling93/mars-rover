import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import MarsRover from "./pages/MarsRover";
import { createGlobalStyle } from "styled-components";
import { MainSection } from "./styling/Main";
import { StateContext, initialState, reducer } from "./context/StateContext";

const Universal = createGlobalStyle`
  body {
    padding: .3rem;
    box-sizing: none;
    margin: 0;
    background-color: #f6f6f6;
    font-family: "Segoe UI";
    input {
      font-family: "Segoe UI"; 
    }
  }
`;

const App = () => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Universal />
      <MarsRover />
    </StateContext.Provider>
  );
};

export default App;
