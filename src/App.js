import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./Todo.css";
import Active_component from "./components/ActiveComponent";
import Completed_component from "./components/CompletedComponent";
import Home_component from "./components/HomeComponent";
import Result_component from "./components/ResultComponent";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <Router>
      <div className='container'>
        <div className='maincontent'>
          <div className='todo'>#todo</div>
          <div className='wrap-menu'>
            <Home_component
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            ></Home_component>
            <Active_component
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            ></Active_component>
            <Completed_component
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            ></Completed_component>
          </div>
          <Routes>
            <Route
              path='/'
              element={<Result_component activeTab={activeTab} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
