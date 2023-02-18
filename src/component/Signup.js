import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import SignUp1 from '../images/SignUp1.jpg';
import './style1.css'

export default function Signup(props) {
  const [credentails, setCredentails] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  const history = useHistory();
  const onChange = (event) => {
    setCredentails({ ...credentails, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //debugger;
    if (credentails.password !== credentails.ConfirmPassword) {
      //debugger
      props.showAlert("Password Not Matched", "danger");
      setCredentails({ name: "",
      email: "",
      password: "",
      ConfirmPassword: "",})
    } else {
      const data = JSON.stringify({
        name: credentails.name,
        email: credentails.email,
        password: credentails.password,
      });
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios
        .post("http://localhost:5000/api/auth/createuser", data, options)
        .then(
          (response) => {
            //console.log(response.data);
            history.push("/login");
            props.showAlert("Account Created Successfully", "success");
          },
          (error) => {
            //InValid Credentials
            props.showAlert("Invalid Details", "danger");
          }
        );
    }
  };

  return (
    <>
      {/* margin:auto, margin-top:10%; background-color:lightcyan; width:400px; border-radius:20px; padding:50px */}
      <div className="row mx-auto"  style={{
          color:"white",
          backgroundColor: "#00579c",
          borderRadius:20,
          width:1000,
          padding:50
        }}>
      <div
        className="container my-4 col"
      >
        <h2 style={{textAlign:"center"}}>Create account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
              onChange={onChange}
              value={credentails.name}
              required
              minLength={5}
            />
          </div>

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
              onChange={onChange}
              value={credentails.email}
              required
            />
            <small style={{color:"white"}}>
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
              onChange={onChange}
              value={credentails.password}
              autoComplete="on"
              required
              minLength={5}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ConfirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="ConfirmPassword"
              name="ConfirmPassword"
              onChange={onChange}
              value={credentails.ConfirmPassword}
              autoComplete="on"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary BtnLogin">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="col" style={{marginTop:50}}>
          <img src={SignUp1} alt="SignUp1" style={{width:400, height:400,borderRadius:20}}/>
      </div>
      </div>
    </>
  );
}
