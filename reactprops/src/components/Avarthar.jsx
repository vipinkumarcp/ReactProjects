import React from "react";


function Avathar(props){

    console.log(props)

    return  <img className="circle-img" src={props.src} alt="avatar_img" />
}

export default Avathar;