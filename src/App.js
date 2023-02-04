import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./component/Alert";
import Signup from "./component/Signup";
import Login from "./component/Login";
import { useState } from "react";

function App() {
  const [alert,setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert(
      {
        msg : message,
        type:type
      }
    )
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar showAlert={showAlert}/>
          <Alert alert={alert}/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert}/>
              </Route>
              <Route exac path="/about">
                <About />
              </Route>
              <Route exac path="/login">
                <Login showAlert={showAlert}/>
              </Route>
              <Route exac path="/signup">
                <Signup showAlert={showAlert}/>
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
