import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Vedu from './vedu.js';
import Login from './login';
import Var from './Var';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login2 from './login2';
import { BrowserRouter } from 'react-router-dom';
//import ResponsiveAppBar from './nav';
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Home from "./components/Home";
//import navbar from './nav.js';
//import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
