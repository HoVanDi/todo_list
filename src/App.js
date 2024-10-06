import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./Todo.css";
import ActiveComponent from "./components/ActiveComponent";
import CompletedComponent from "./components/CompletedComponent";
import HomeComponent from "./components/HomeComponent";
import ResultComponent from "./components/ResultComponent";

const App = () => {
  const [activeTab, setActiveTab] = useState("all");
  return (
    <Router>
      <div className="container">
        <div className="maincontent">
          <div className="todo">#todo</div>
          <div className="wrap-menu">
            <HomeComponent
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            ></HomeComponent>
            <ActiveComponent
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            ></ActiveComponent>
            <CompletedComponent
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            ></CompletedComponent>
          </div>
          <Routes>
            <Route
              path="/"
              element={<ResultComponent activeTab={activeTab} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
