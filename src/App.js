/* eslint-disable */
import React from "react";
import "netlify-styleguide/src/css/main.css";
import "./App.css";
import Templates from "./components/Templates";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Template Picker</h1>
        <p>
          Starting a site doesn't have to be hard, here are some examples to get you started. Add a new template via <a href="https://github.com/bdougie/cms-templates">GitHub</a>
        </p>
      </div>
      <Templates />
    </div>
  );
};

export default App;
