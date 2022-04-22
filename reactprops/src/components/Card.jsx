import React from "react";
import Avathar from "./Avarthar";
import Para from "./Paragrapg";



const Card = (props) =>{

   

      
    return( <div className="card">
    <div className="top">
      <h2 className="name" >{props.name}</h2>
     <Avathar src={props.src}/>
    </div>
    <div className="bottom">
    <Para detailInfo={props.phone} />
    <Para detailInfo = {props.info} /> 
    </div>
  </div>)
}

export default Card;