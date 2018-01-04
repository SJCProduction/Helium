import React from 'react';
import './LandingPage.css'
const LandingPage = () =>{
  return(
    <React.Fragment> 
    <h3>Helium.js is a node package that helps make your React application isomorphic and optimized</h3>
    <div className="logoDiv">
    <img className ="logo" src="../src/images/heliumjs.png" alt="heliumLogo"/>
    </div>
    <p>What is the benefit of server-side rendering?<br/>Leveraging server-side rendering can significantly improve first page load performance: render JavaScript templates on the server to deliver fast first render, and then use client-side templating once the page is loaded. However, performance benefits depend on the use case and server-side rendering is not a one size fits all design.</p>
    </React.Fragment>
  )
}

export default LandingPage;