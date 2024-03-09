import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/Home.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './movies.jsx'
import Movies from './movies.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const main = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/' element={<Movies/>} />
      </Routes>
    </Router>
  );
};

export default main;