import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./Todo.css";
import Title from "./components/Title";
import Navigation from "./components/Navigation";
import Body from "./components/Body";

const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  return (
<Router>
      <div className="container">
        <div className="maincontent">
          <Title />
          <Navigation setActiveTab={setActiveTab} />
          <hr />
          <Routes>
          <Route path="/" element={<Body activeTab={activeTab} />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
