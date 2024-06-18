import React, { useState } from 'react'

const ResetStateVariable = () => {
    const[text,setText] = useState('hello');
    function handleReset(){
        setText('hello');
    }
  return (
    <div>
      <input type='text' onChange={e=>setText(e.target.value)} value={text}/>
      <p>{text}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default ResetStateVariable
