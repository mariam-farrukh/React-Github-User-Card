import React from 'react';
import './App.css';
import Data from './components/Data.js';
import { FullDiv } from "../src/components/StyledComponents.js";

function App() {
  return (
    <FullDiv className="App">
      <Data />
    </FullDiv>
  );
}

export default App;
