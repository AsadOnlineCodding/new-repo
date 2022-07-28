import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login(props) {
    const host = "http://localhost:4000"
    const [cerdentials, setCerdentials] = useState({email:"", password:""});
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ email:cerdentials.email, password:cerdentials.password })
        });
        const json = await response.json();
        console.log(json)
        if(json.success){
            // redirect
            localStorage.setItem('token',json.authtoken)
            navigate('/yournotes');
            navigate('/about');
          props.showAlert("Logged in SuccessFully","success")

        }
        else{
            props.showAlert("Invalid Cerdentials","danger")
        }

    }
    const onChange = (e) => {

        setCerdentials({ ...cerdentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container my-4 w-auto p-3' style={{maxWidth: "auto 800px"}}>

            <h2 style={{color:"White",marginBottom:"10px"}}>Login to Continue to iNoteBook
            <br />
            <p style={{color:"red",display:"block",marginTop:"-18px"}}>___________________________________</p>
            </h2>

            <form onSubmit={handleSubmit} >
                <div className="mb-3 ">
                    <label htmlFor="email" className="form-label text-white">Email address</label>
                    <input type="email"style={{backgroundColor:"rgb(1, 1, 41)",color:"white"}} onChange={onChange} value={cerdentials.email} className="form-control border border-danger" id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-white">Password</label>
                    <input style={{backgroundColor:"rgb(1, 1, 41)", color:"white"}}type="password" onChange={onChange} value={cerdentials.password}  className="form-control border border-danger" name="password" id="password" />
                </div>

                <button type="submit" className="btn  border border-danger " style={{backgroundColor:"rgb(1, 1, 41)", color:"white"}}>Submit</button>
            </form>
        </div>
    )
}
