import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const [textInWindow, setTextInWindow] = useState("Mesaj");

  const handleIncrementClick = () => {
    setCount((prevState) => prevState + 1);

    console.log("in handle = ", count);
  };

  const handleDecrementClick = () => {
    setCount(count - 1);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTextInWindow(message);
  };

  const handleInputChage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <h1>{count}</h1>
        <div className="row">
          <button onClick={handleIncrementClick}>Increment</button>
          <button onClick={handleDecrementClick}>Decrement</button>

          <form onSubmit={onFormSubmit}>
            <div className="my-form">
              <input
                onChange={handleInputChage}
                type="text"
                placeholder="Your text"
              />
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
