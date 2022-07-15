import React, { useState } from "react";
import Button from "./Button";
import "./Counter.css";

const Counter = () => {
  const [value, setValue] = useState(0);
  const Increament = () => {
    setValue((value) => value + 1);
  };
  const Decrement = () => {
    setValue((value) => value - 1);
  };
  const ResetValue = () => {
    setValue((value) => 0);
  };

  return (
    <>
      <div className="counter-Border">
        <Button content={"+"} handleClick={Increament} />
        <span>{value}</span>
        <Button content={"-"} handleClick={Decrement} />
        <div>
          <Button content={"Reset"} handleClick={ResetValue} />
        </div>
      </div>
    </>
  );
};

export default Counter;
