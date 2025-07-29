import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"



const Create = () => {
  const[value, setValue]=useState({
    name:'',
    phone:'',
    action:'',
    email:''
  })
  const navigate=useNavigate();

  const handleSubmit=(event)=>{
    event.preventDefault();
     axios.post('http://localhost:8000/users',value)
        .then(res => {
          console.log(res);
          navigate('/')
        })
        .catch(err=> console.log(err));

  }
  return (
    <div className="d-flex w-200 vh-100 justify-content-center align-item-center bg-info">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 p-2 rounded">
        <h1>ADD A USER</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" >Name:</label>
            <input type="text" name="name"className="form-control" placeholder="enter your name"
            onChange={e=>setValue({...value, name: e.target.value})}/>
          </div>
          <div className="mb-2">
            <label htmlFor="phone">phone:</label>
            <input type="text" name="phone" className="form-control" placeholder="enter your phone:"onChange={e=>setValue({...value, phone: e.target.value})}/>
          </div>
          
          <div className="mb-2">
            <label htmlFor="action">action:</label>
            <input type="text" name="action" className="form-control" placeholder="enter your action:"
            onChange={e=>setValue({...value, action: e.target.value})}/>
          </div>
          <div className="mb-2">
            <label htmlFor="email">email:</label>
            <input type="email" name="email" className="form-control" placeholder="enter your email" onChange={e => setValue({...value,email:e.target.value})}/>
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">Back</Link>
        </form>
      
      </div>
    </div>
  )
}

export default Create