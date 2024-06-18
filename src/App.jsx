import React, { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ReactConcept from "./components/ReactConcept";
import JavaScriptConcept from "./components/JavaScriptConcept";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReduxConcept from "./components/ReduxConcept";
import JavascriptLogical from "./components/JavascriptLogical";
import ReactBasedMiniProject from "./components/ReactBasedMiniProject";
import RightSection from "./screen/RightSection";

function App() {
  const [data, setData] = useState("");

  const JavascriptCallback = (callback) => {
    setData(callback);
  };

  const ReactCallback = (callback) => {
    setData(callback);
  };

  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="sidebar-container">
          <div className="sidebard">
            <Routes>
              <Route
                path="/"
                element={
                  <JavaScriptConcept JavascriptCallback={JavascriptCallback} />
                }
              />
              <Route
                path="/react"
                element={<ReactConcept ReactCallback={ReactCallback} />}
              />
              <Route path="/redux" element={<ReduxConcept />} />
              <Route path="/js-concept" element={<JavascriptLogical />} />
              <Route
                path="/react-project"
                element={<ReactBasedMiniProject />}
              />
            </Routes>
          </div>
          <div className="dashboard">
            <RightSection data={data} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
