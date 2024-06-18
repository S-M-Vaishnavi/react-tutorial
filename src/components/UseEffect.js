import React,{useState,useEffect} from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("green");


    //it runs every time the component re-renders
    // useEffect(()=>{
    //     document.title = `Count:${count}`;
    // });


    //it runs only once when the component mount
    // useEffect(()=>{
    //     document.title = `Count:${count}`;
    // },[]);


    //we can pass the value in array dependency it only mounts and when render when the value changes
    //when we dont add color in an dependency array the title updates the count 
    //but if we change the color ,the color changes only on the paragraph not on the title
    //by executing this code, only the count changes
    // useEffect(()=>{
    //     document.title = `Count:${count} ${color}`;
    // },[count]);


    //if i add color to the dependency array,anytime the count or color changes it also update the title
    // useEffect(()=>{
    //     document.title = `Count:${count} ${color}`;
    // },[count,color]);


    //if we removed useEffect well your title is still going to update
    //so why we need use effect
    //there couple of benefits for using useEffect
    //1.by using useEffect it keeps your code more organize when we look on react code we can tell when the code exactly runs by using useEffect
    //if we didn't use useEffect this code would run every single time regardless every time the component rerenders 
    // document.title = `Count:${count} ${color}`;


    //if you want  to remove free up or resources we can return a clean up function
    //when this component unmount when we remove it from the DOM or before the next render
    //you can perform some clean up code  
     useEffect(()=>{
        document.title = `Count:${count} ${color}`;

        return()=>{
            //SOME CLEANUP CODE

        }
    },[count,color]);

    function addCount(){
        setCount(c=>c+1);
    }
     function subtractCount(){
        setCount(c=>c-1);
     }
     function changeColor(){
        setColor(c=>c==='green'?'red':'green');
     }
  return (
    <div>
      {/* <p>Count:{count}</p> */}
      <p style={{color:color}}>Count:{count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>ChangeColor</button>
    
    </div>
  )
}

export default UseEffect
