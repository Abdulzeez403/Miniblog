import React from 'react';
import ReactDom from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App'
import "./index.css"

function ParentHome(){
  return(
   <>
    <App/>
   </>

  )
 }





ReactDom.render( <ParentHome />, document.getElementById("root"));