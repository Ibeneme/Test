import "./BarChart.css";
import React from "react";
import { Channel } from "../../Types/Types";
import ChannelBar from "./ChannelBar";
import Explanation from "./Explanation";
import { BarChartProps } from "../../Types/Types";


const BarChart: React.FC<BarChartProps> = ({ channels }) => {
  return (
    <div className="bar-chart-container">
      <div className="bar-chart">
        {channels.map((dataItem, index) => (
          <ChannelBar key={index} dataItem={dataItem} />
        ))}
      </div>
      <Explanation />
    </div>
  );
};

export default BarChart;
