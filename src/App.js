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
          Starting a site doesn't have to be hard, here some examples to get you started.
        </p>
    {/*
        <a href="https://github.com/bdougie/cms-templates">
          <img
            style={{ position: "absolute", top: 0, right: 0, border: 0 }}
            src="https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67"
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"
          />
        </a>
    */}
      </div>
      <Templates />
    </div>
  );
};

export default App;
