import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Login1 from '../images/Login1.jpg'
import './style1.css'

export default function Login(props) {
  const [credentails, setCredentails] = useState({email:"",password:""});
  const history = useHistory();
  
  const onChange=(event)=>{
    setCredentails({...credentails,[event.target.name]:event.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //debugger;
    const data = JSON.stringify({email:credentails.email, password: credentails.password });
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios.post("http://localhost:5000/api/auth/login", data, options).then(
      (response) => {
        //console.log(response.data);
        if(response.data.success)
        {
            //save auth token and redirect to home page
            localStorage.setItem("token",response.data.authToken)
            props.showAlert("Logged in Successfully","success")
            history.push("/dashboard")
        }
        else
        {
           
        }
      },
      (error) => {
        
        //InValid Credentials
        props.showAlert("Invalid Credentials","danger")
      }
    );
  };

  return (
    <>
      <div className="row mx-auto" style={{
          color:"white",
          backgroundColor: "#00579c",
          borderRadius:20,
          width:900,
          padding:50,
        }}>
      <div className="col" onSubmit={handleSubmit} style={{marginTop:100}}>
      <h2>Login to MereKeeps</h2>
        <form>
          <div className="mb-3 img">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              style={{ width: 300 }}
              value={credentails.email}
              onChange={onChange}
            />
            <small>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              style={{ width: 300 }}
              autoComplete="on"
              value={credentails.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary BtnLogin">
            Submit
          </button>
        </form>
      </div>
      <div className="col" style={{marginTop:50}}>
          <img className="img-fluid" src={Login1} alt="Login1"style={{width:400, height:400,borderRadius:20}}/>
      </div>
      </div>
    </>
  );
}
