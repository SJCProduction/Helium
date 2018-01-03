import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import helium from 'helium.js/react';

helium(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, 
  'root' 
);
// ReactDOM.render(
//   <BrowserRouter>
//   <App/>
//   </BrowserRouter>,
//   document.getElementById("root")
// )
