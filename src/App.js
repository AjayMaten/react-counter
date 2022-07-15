import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import React, { useState } from "react";

function App() {
  const [ctNumber, setCounterNumber] = useState(0);
  function Increase() {
    setCounterNumber((ctNumber) => ctNumber + 1);
  }
  function getCounter() {
    return Array(ctNumber).fill(<Counter />);
  }
  return (
    <div className="App">
      <div className="singleButton">
        <Button content={"+"} handleClick={Increase} />
      </div>
      {getCounter()}
    </div>
  );
}

export default App;
