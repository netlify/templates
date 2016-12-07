/* eslint arrow-body-style: 0 */
import React, { PropTypes } from "react";
import image from "../images/placeholder.png";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card card-ui">
      <img
        className="image"
        src={props.image ? props.image : image}
        alt="site-preview"
      />
      <h3 className="ui">{props.name}</h3>
      <p className="ui">{props.type}</p>
      <a href={`https://app.netlify.com/start/deploy?repository= ${ props.repo }`}><button className="button-ui-default">Deploy to Netlify</button></a>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  repo: PropTypes.string,
  type: PropTypes.string,
};

export default Card;

