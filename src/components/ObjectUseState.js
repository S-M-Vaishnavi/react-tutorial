import React, { useState } from 'react'

const ObjectUseState = () => {
    const[obj,setObj] = useState({
        firstName:'',
        email:'',
        age:"",
    });
    const [objList,setObjList] = useState([]);

    function handelSubmit(e){
        e.preventDefault();
        setObjList(prevList=>[...prevList,obj]);
        setObj({
            firstName:'',
            email:'',
            age:'',
        })
    }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <p>
        <label>Name:</label>
        <input type="text" value={obj.firstName} onChange={e=>setObj({...obj,firstName:e.target.value})}/>
        </p>
        <p>
        <label>Email:</label>
        <input type="email" value={obj.email} onChange={e=>setObj({...obj,email:e.target.value})}/>
        </p>
        <p>
        <label>Age:</label>
        <input type="text" value={obj.age} onChange={e=>setObj({...obj,age:e.target.value})}/>
        </p>
        <p>
            <input type='submit' value="Submit" />
        </p>
      </form>
      <table rules="all" border="1">
        <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
        </thead>
        <tbody>
            {objList.map((element,index)=>(
                <tr key={index}>
                    <td>{element.firstName}</td>
                    <td>{element.email}</td>
                    <td>{element.age}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default ObjectUseState
