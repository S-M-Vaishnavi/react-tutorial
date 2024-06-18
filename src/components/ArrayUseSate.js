import React, { useState } from "react";

const ArrayUseSate = () => {
  const [arr, setArr] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addingElements() {
    setArr((prevArr) => [...prevArr, inputValue]);
    setInputValue("");
  }
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>
        <button onClick={addingElements}>Add</button>
      </p>
      <ul>
        {arr.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayUseSate;
