import React from "react";
import { useState } from "react";

const UseState = () => {
    // const [state, setState] = useState(initialState);
    const [count,setCount] = useState(0);
    // const [text,setText] = useState("hello");
    const [alert,setAlert] = useState(false);
    const [form,setForm] = useState({
        firstName:'',
        lastName:'',
        email:'',
    });

    function handleCount(){
        setCount(count=>count+1);
    }
    function handleText(e){
        setText(e.target.value);
    }
    function handleAlert(){
        setAlert(true);
        window.alert("You are Clicked alert Box");
    }

    const [ todo,setTodo] = useState(createInitialTools);
    const [text,setText] = useState('');
    function createInitialTools(){
        let initialTools = [];
        for(let i=0;i<2;i++){
            initialTools.push({
                id:i,
                // text:'Item'+(i+1)
                text:'text',
            });
        }
        return initialTools;
    }
    return(
        <>
            <button onClick={handleCount}>Click Me</button>
            <p>{count}</p>
            <input type="text" value={text} onChange={handleText} />
            <p>{text}</p>
            <button onClick={()=>setText("hello")}>Reset</button><br></br>
            <button onClick={handleAlert}>Click Me</button>
            <h1>Updating objects and arrays in state </h1>
            <label>FirstName:</label>
            <input value={form.firstName} onChange={e=>setForm({...form,firstName:e.target.value})}/>
            <label>LastName:</label>
            <input value={form.lastName} onChange={e=>setForm({...form,lastName:e.target.value})}/>
            <label>Email:</label>
            <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
            <p>FirstName:{form.firstName}</p>  
            <p>LastName:{form.lastName}</p>   
            <p>Email:{form.email}</p>   

            <h1>Passing the initializer function </h1>
            <input value={text} onChange={e=>setText(e.target.value)}/>
            <button onClick={()=>{setText('');setTodo([{
                id:todo.length,text:text
            },...todo])}}>Add</button>
            <ul>
                {todo.map(item=>(
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </>
    )
}

export default UseState;