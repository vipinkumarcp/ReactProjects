
import React, { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false)
  const [name, setName] = useState("");
  function handleMouseOver() {

    setMouseOver(true)

  }

  function handleMouseOut() {

    setMouseOver(false)
  }


  function click(event) {


    return setHeadingText("Submitted")
  }

  function handleChange(event){
    console.log(event.target.value)
    setName(event.target.value)
  }


  return (
    <div className="container">
    <h1>Hello {name}</h1>
      <h1>{headingText}</h1>
      
      <input 
      onChange={handleChange}
      type="text" 
      placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={click}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >Submit</button>
    </div>
  );
}

export default App;
