import React, { useEffect, useState } from 'react'

const HeightAndWidthUseEffect = () => {
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("Event Listener Added");

        return()=>{
            window.removeEventListener("resize",handleResize);
            console.log("EventListener is removed");
        }
    },[])
    
  return (
    <div>
      <p>Window Width:{width}px</p>
      <p>Window Height:{height}px</p>
    </div>
  )
}

export default HeightAndWidthUseEffect
