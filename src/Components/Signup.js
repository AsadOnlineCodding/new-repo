import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
  const [cerdentials, setCerdentials] = useState({ email: "", password: " ", cpassword: "", name: "" });
  const host = "http://localhost:4000"
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = cerdentials;
    const response = await fetch(`${host}/api/auth/createuser/`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({ email, password, name })
    });
    const json = await response.json();
    console.log(json)
    if (json.authtoken) {
      // redirect
      localStorage.setItem('token', json.authtoken)
      navigate('/about');
      props.showAlert("Account Created SuccessFully", "success")

    }
    else {
      props.showAlert("invalid Cerdentials", "danger")
    }
  }
  const onChange = (e) => {

    setCerdentials({ ...cerdentials, [e.target.name]: e.target.value })
  }
  return (
    <div className="container my-2" style={{ maxWidth: "auto 800px"}}>
      <h2 style={{ color: "White", marginBottom: "10px" }}>Create an account to use iNoteBook
        <br />
        <p style={{ color: "red", display: "block", marginTop: "-18px" }}>_______________________________________</p>
      </h2>

      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ color: "White" }}>Name</label>
          <input type="text" style={{ backgroundColor: "rgb(1, 1, 41)", color: "white" }} className="border border-danger form-control" required onChange={onChange} minLength={3} id="name" name='name' aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label" style={{ color: "White" }}>Email address</label>
          <input type="email" style={{ backgroundColor: "rgb(1, 1, 41)", color: "white" }} required className="border border-danger form-control" onChange={onChange} minLength={12} id="email" name="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" style={{ color: "White" }}>Password</label>
          <input type="password" style={{ backgroundColor: "rgb(1, 1, 41)", color: "white" }} className="border border-danger form-control" minLength={5} required onChange={onChange} name="password" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label" style={{ color: "White" }}>Confirm Password</label>
          <input type="password" style={{ backgroundColor: "rgb(1, 1, 41)", color: "white" }} className="border border-danger form-control" name="cpassword" minLength={5} required onChange={onChange} id="cpassword" />
        </div>
        <button type="submit" className="btn  border border-danger " style={{backgroundColor:"rgb(1, 1, 41)", color:"white"}}>Submit</button>
      </form>
    </div>
  )
}
