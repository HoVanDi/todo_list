import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./Todo.css";


import Title_component from "./components/Title_component"
import Result_component from './components/Result_component';
import Home_component from './components/Home_component';
import Active_component from './components/Active_component';
import Completed_component from './components/Completed_component';



const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  return (
    <Router>
      <div className="container">
        <div className="maincontent">
          <Title_component></Title_component>
          <div className="navigation">
            <Home_component setActiveTab={setActiveTab}></Home_component>
            <Active_component setActiveTab={setActiveTab}></Active_component>
            <Completed_component setActiveTab={setActiveTab}></Completed_component>
          </div>
          <Routes>
            <Route path="/" element={<Result_component activeTab={activeTab} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}



export default App
