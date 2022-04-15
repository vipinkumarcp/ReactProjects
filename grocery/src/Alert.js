import React, { useEffect } from 'react'

const Alert = ({type,msg,removeAlert,list}) => {
  useEffect(()=>{

    //clean up alert function after 3 seconds
    const timeout = setTimeout(()=>{

      removeAlert()

    },3000)
    //clean up timeout function
    return () => clearTimeout(timeout)


  },[list])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
