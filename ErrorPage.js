import React from "react";
import "./ErrorPage.scss";
import { images } from "../constants";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="app__container-bg-normal">
      <img
        src={images.errorImage}
        alt="error-image"
        className="error-image"
      ></img>
      <Link to="/">
        <button className="btn-error">Go To Home Page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
