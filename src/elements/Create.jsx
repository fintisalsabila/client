import axios from "axios";
import e from "express";
import React, { useState } from "react";

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
    })

    function handleSubmit(e){
        e.preventDefault()
        axios.post('/add_user', values)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }
    return (
        <div className="container vh-100 vw-100 bg-primary">
            <div className='row'>
                <h3>Add Student</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group my-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={(e)=> setValues({...values, name: e.target.value})} />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={(e)=> setValues({...values, email: e.target.value})} />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="age">Age</label>
                        <input type="text" name="age" onChange={(e)=> setValues({...values, age: e.target.value})} />
                    </div>
                    <div className="form-group my-3">
                        <label htmlFor="gender">Gender</label>
                        <input type="text" name="gender" onChange={(e)=> setValues({...values, gender: e.target.value})} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create