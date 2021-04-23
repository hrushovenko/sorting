import React from "react";
import "./App.css";
import SortVisualization from "./SortVisualization/SortVisualization.jsx"

function App() {
  return (
    <div className="App" align="center">
      <div className="wrapper">
        <div>
          <h1>Bubble Sort App</h1>  
          <SortVisualization />
        </div>
      </div>
    </div>
  );
}

export default App;