import React, { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ReactConcept from "./components/ReactConcept";
import JavaScriptConcept from "./components/JavaScriptConcept";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReduxConcept from "./components/ReduxConcept";
import JavascriptLogical from "./components/JavascriptLogical";
import ReactBasedMiniProject from "./components/ReactBasedMiniProject";
import Dashboard from "../src/screen/Dashboard";

function App() {
  const [data, setData] = useState("");
  const JavascriptCallback = (callback) => {
    setData(callback);
  };

  return (
    <div>
      <Router>
        <div>
          <HeaderComponent />
        </div>
        <div style={{ display: "flex" }}>
          <div className="sidebard">
            <Routes>
              <Route
                path="/"
                element={
                  <JavaScriptConcept JavascriptCallback={JavascriptCallback} />
                }
              />
              <Route path="/react" element={<ReactConcept />} />
              <Route path="/redux" element={<ReduxConcept />} />
              <Route path="/js-concept" element={<JavascriptLogical />} />
              <Route
                path="/react-project"
                element={<ReactBasedMiniProject />}
              />
            </Routes>
          </div>
          <div className="dashboard">
            <Dashboard data={data} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
