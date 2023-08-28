import React from "react";
import "./state.css";

const ShimmerLoader: React.FC = () => {
  return (
    <div className="shimmer-loader-container">
      <div className="shimmer-loader"></div>
      <div className="shimmer-loader"></div>
      <div className="shimmer-loader"></div>
      <div className="shimmer-loader"></div>
      <div className="shimmer-loader"></div>
      <div className="shimmer-loader"></div>
      <div className="shimmer-loader"></div>
    </div>
  );
};

export default ShimmerLoader;
