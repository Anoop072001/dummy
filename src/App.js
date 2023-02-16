
import './App.css';
import Hero from './components/Hero/Hero';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Sign from './components/sign/Sign';
import React, { useEffect } from 'react';


function App() {

  return (
    <div className="App">
      {/* <Sign/> */}
      <Router>
          {/* <Sign/> */}
          {/* <Hero/> */}
          <Routes>
            <Route exact path="/" element={<Sign/>}></Route>
            <Route exact path="Hero" element={<Hero/>}></Route>
            {/* <Route exact path="Hero" element={<Hero/>}></Route> */}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
