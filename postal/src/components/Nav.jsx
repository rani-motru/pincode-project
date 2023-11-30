import React, { useState } from 'react';
import { Link } from "react-router-dom";
 

export default function Nav (props){
   
  return (
    <div className="nav">
      
      <Link to="/Home">
        <div>Home</div>
      </Link>
      <Link to="/Pincode">
        <div>Pincode</div>
      </Link>
      <Link to="/Region">
        <div>Region</div>
      </Link>
      <Link to="/About">
        <div>About</div>
      </Link>
    </div>

  );
};
