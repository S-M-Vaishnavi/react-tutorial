import React, { useState } from 'react';
const Form = () => {
    const [form,setForm] = useState({
        name:'',
        email:'',
        age:'',
        gender:'',
        courses:'',
    });
  return (
    <div>
        <form>
            <p>
                <label>Name:</label>
                <input type='text' value={form.name}  onChange={e=>setForm({...form,name:e.target.value})}/>
            </p>
            <p>
                <label>Email:</label>
                <input type='email'  value={form.email}   onChange={e=>setForm({...form,email:e.target.value})}/>
            </p>
            <p>
                <label>Age:</label>
                <input type='number'  value={form.age}   onChange={e=>setForm({...form,age:e.target.value})}/>
            </p>
            <p>
                <label>Gender:</label>
                <input type='radio' value="Male" name='gender'  checked={form.gender === 'Male'}  onChange={e=>setForm({...form,gender:e.target.value})}/>Male
                <input type='radio' value="Female"  name='gender'   checked={form.gender === 'Female'}  onChange={e=>setForm({...form,gender:e.target.value})}/>Female
            </p>
            <p>
                <label>Select Courses</label>
                <select  value={form.courses}   onChange={e=>setForm({...form,courses:e.target.value})}> 
                    <option value=''> Choose</option>
                    <option value="Java"> Java</option>
                    <option value="Python"> Python</option>
                    <option value="php"> Php</option>
                </select>
            </p>
        </form>
        <div>
            <p>Name: {form.name}</p>
            <p>Email: {form.email}</p>
            <p>Age: {form.age}</p>
            <p>Gender: {form.gender}</p>
            <p>Courses: {form.courses}</p>
        </div>
    </div>
  )
}

export default Form
