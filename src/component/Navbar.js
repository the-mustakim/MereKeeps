import React, { useEffect } from "react";
import {Link, useHistory, useLocation} from 'react-router-dom'
import MereKeepsLogo from '../images/MereKeepsLogo.png'
import './style1.css'

export default function Navbar(props) {
  
  let location=useLocation()
  const history = useHistory();
  useEffect(()=>{
    //console.log(location.pathname)
  },[location])

  const handleSignout=()=>{
    localStorage.removeItem("token")
    history.push("/login")
    props.showAlert("Signed Out Successfully", "success") 
  }


  return (
    <>
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img src={MereKeepsLogo} alt="MereKeepsLogo" style={{height:50,width:50}}/>
            <Link className="navbar-brand" to="#">
              MereKeeps
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/" ? "active":"" }`} aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/dashboard" ? "active":"" }`} aria-current="page" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/about" ? "active":""} `} to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/contact" ? "active":""} `} to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
              {!localStorage.getItem("token")?<form className="d-flex">
                <Link className="btn btn-primary mx-1 BtnLogin" role="button" to="/login">Login</Link>
                <Link className="btn btn-primary mx-1 BtnLogin" role="button" to="/signup">Signup</Link>
              </form>: <button className="btn btn-primary" onClick={handleSignout}>Sign out</button>}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
