import React from "react";
import LoginForm from "./Login";
var isLoggedin = false;
var userIsRegistered = false;



function App() {
  return (
    <div className="container">
    {
        isLoggedin ?  <h1>Hello</h1> : <LoginForm/> }
     
    </div>
  );
}

export default App;
