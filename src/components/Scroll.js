import React from "react";

//props
//state
//Children


const Scroll = (props) =>{

  return (
  // console.log(props)
  // return props.children
  <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
    {props.children}

  </div>
  );
}

export default Scroll