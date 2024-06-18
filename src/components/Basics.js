import React from 'react';

function Basics({ name, arr, arrOfObj, add ,obj}) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h2>Array:</h2>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Array of Objects:</h2>
      <ul>
        {arrOfObj.map(obj => (
          <li key={obj.id}>{obj.fruit}</li>
        ))}
      </ul>
      <h2>Add Function:</h2>
      <p>10 + 20 = {add(10, 20)}</p>
      <h2>Object</h2>
      <p>{obj.id}</p>
      <p>{obj.language}</p>
    </div>
  );
}

export default Basics;
