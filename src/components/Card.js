/* eslint arrow-body-style: 0 */
/* eslint-disable */ 
import React, { PropTypes } from "react";
import placeHolder from "../images/placeholder.png";
import "./Card.css";

const Card = ({ image, repo, name, previewUrl, type }) => {
  return (
    <div className="card card-ui">
      <a href={previewUrl} target="_blank"><img
        className="image"
        src={image || placeHolder}
        alt="site-preview"
      /></a>
      <h3 className="card-header"><a className="action action-text-productive" href={repo}>{name}</a> {type} template</h3>
      <a className="btn btn-default" href={`https://app.netlify.com/start/deploy?repository= ${ repo }`}>Deploy to Netlify</a>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  preview: PropTypes.string,
  repo: PropTypes.string,
  type: PropTypes.string,
};

export default Card;

