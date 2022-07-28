import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const navigate = useNavigate();
    let location = useLocation()
    const handleLogout = () => {
        // console.log("remove Item")
        localStorage.removeItem('token');
        props.showAlert("Logout SuccessFully","success")
        navigate('/')
    }
    return (
<>
        <nav style={{backgroundColor: "black", height:"auto"}}className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">𝕚-ℕ𝕠𝕥𝕖-𝔹𝕠𝕠𝕜</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : " "} `} to="/">General Information</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/yournotes' ? "active" : " "} `} aria-current="page" to="/yournotes">Your Notes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? "active" : " "} `} to="/about">About Us</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem("token") ? <form className="d-flex" role="search">
                        <Link className="btn btn-dark  border border-danger  mx-1 text-white" to="/login" role="button">Login</Link>
                        <Link className="btn btn-dark border border-danger   mx-1 text-white" to="/signup" role="button">SignUp</Link>
                    </form> : <button className='btn btn-dark border border-danger  text-white' onClick={handleLogout}>Logout</button>}
                </div>
            </div>
        </nav>
        
</>
    )
}

export default Navbar