import React from 'react';
import './LandingPage.css'
const LandingPage = () =>{
  return(
    <React.Fragment> 
    <div className="logoDiv">
    <img className ="logo" src="../src/images/helium.png" alt="heliumLogo"/>
    </div>
    <h1> Welcome to Helium.js</h1>
    </React.Fragment>
  )
}

export default LandingPage;