import React from 'react';

const About = ()=> {
  return (
  <React.Fragment>
    <p className="about">Currently, Helium.js includes server side rendering with support for React Router v4 and Redux v3 using React Fiber - v16. </p>
    <p className="about"><strong>Coming soon</strong>: Optimization for webpack bundles!</p>
    <p>For detailed documentation on usage, please visit our github page <a href="https://github.com/SJCProduction/Helium.js"> <i class="fab fa-github fa-2x"></i></a> or <a href="https://www.npmjs.com/package/helium.js">npm</a>.</p>
    <p>This website is using Helium.js!</p>

  </React.Fragment>
  )
}

export default About;