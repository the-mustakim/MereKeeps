import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Signup() {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
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
    axios.post("http://localhost:5000/api/auth/createuser", data, options).then(
      (response) => {
        //console.log(response.data);
        history.push("/login")
      },
      (error) => {
        //InValid Credentials
        alert(error);
      }
    );
  };

  return (
    <>
      <div className="container">
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
