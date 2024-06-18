import React, { useState } from 'react'

const Toggle = () => {
    const [show,setShow] = useState(true);
  return (
    <div>
     {<button onClick={()=>setShow(!show)}>{show?'Show':'Hide'}</button>}
     <p>{show ? "This is Show element":"This is Hide element"}</p>
    </div>
  )
}

export default Toggle
