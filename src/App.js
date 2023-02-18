import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Navbar from "./component/Navbar";
import About from "./component/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./component/Alert";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Footer from "./component/Footer";
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
          <div className="container" style={{marginTop:70}}>
            <Alert alert={alert}/>
          </div>
          <div className="container my-4">
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert}/>
              </Route>
              <Route exact path="/dashboard">
                <Dashboard showAlert={showAlert}/>
              </Route>
              <Route exac path="/about">
                <About />
              </Route>
              <Route exac path="/contact">
                <Contact showAlert={showAlert}/>
              </Route>
              <Route exac path="/login">
                <Login showAlert={showAlert}/>
              </Route>
              <Route exac path="/signup">
                <Signup showAlert={showAlert}/>
              </Route>
            </Switch>
          </div>
          <footer>
            <Footer/>
          </footer>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
