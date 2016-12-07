/* eslint arrow-body-style: 0 */
/* eslint-disable */
import React from "react";
import Card from "./Card";
import templates from "../lib/templates";
import "./Templates.css";

const Templates = () => {
  return (
    <div className="Templates">
      {templates.map(
        (t) => <Card
          name={t.name}
          repo={t.repoUrl}
          image={t.previewImageUrl}
          type={t.type}
        />)}
    </div>
  );
};

export default Templates;

