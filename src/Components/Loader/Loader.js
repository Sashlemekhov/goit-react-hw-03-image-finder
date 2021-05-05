import React from 'react';
import Loader from "react-loader-spinner";
import { createPortal } from 'react-dom';
const loaderRoot = document.getElementById('loader-root');

const LoaderWatch = () => {
  return createPortal(
    <Loader
      className="Loader"
      type="ThreeDots"
      color="#3f51b5"
      height={100}
      width={100}
      timeout={5000}
    />, loaderRoot
  );
};

export default LoaderWatch;
