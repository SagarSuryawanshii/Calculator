import { Component } from "react";
import Button from "./Component/Buttons.jsx";
import "./App.css";
import { useState } from "react";
import Result from "./Component/Result.jsx";

function App() {
  const [inputResult, setInputResult] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText == "C") {
      setInputResult("");
    } else if (buttonText == "=") {
      if (inputResult != "") {
        const result = eval(inputResult);
        setInputResult(result);
      }
    } else {
      const newDisplayValue = inputResult + buttonText;
      setInputResult(newDisplayValue);
    }
  };

  return (
    <>
      <div className="container">
        <div className="calculator">
          <Result inputValue={inputResult}></Result>
          <Button onButtonClick={onButtonClick}></Button>
        </div>
      </div>
    </>
  );
}

export default App;
