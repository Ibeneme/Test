import React from "react";
import "./BarChart.css";

const Explanation: React.FC = () => {
  return (
    <div className="explanation">
      <div className="flex-explanation">
        <div className="blocked-box-max-htc"></div>Max Htlc Msat
      </div>
      <div className="flex-explanation">
        <div className="blocked-box-two"></div>Time Lock Data
      </div>

      <div className="flex-explanation">
        <div className="blocked-box-min-htc"></div>Min Htlc Msat
      </div>

      <div className="flex-explanation">
        <div className="blocked-box-fee"></div>Min Htlc Msat
      </div>

      <div className="flex-explanation">
        <div className="blocked-box-capacity"></div>Capacity
      </div>
    </div>
  );
};

export default Explanation;
