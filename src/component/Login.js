import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
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
            history.push("/")
        }
        else
        {
           
        }
      },
      (error) => {
        
        //InValid Credentials
         alert("Invalid Credentials")
      }
    );
  };

  return (
    <>
      <div className="container" onSubmit={handleSubmit}>
        <form>
          <div className="mb-3">
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
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
