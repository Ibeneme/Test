import React from "react";
import "./BarChart.css";
import { ChannelBarProps } from "../../Types/Types";


const ChannelBar: React.FC<ChannelBarProps> = ({ dataItem }) => {
  return (
    <div
      className="bar"
      style={{
        height: `${(Number(dataItem?.capacity) / 23700000) * 1520}%`,
      }}
      title={`PEER: ${dataItem.node2_info.node.alias}`}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="barss"
          style={{
            height: `${
              Number(dataItem.node1_policy?.time_lock_delta) * 120000
            }%`,
          }}
        ></div>
        <div
          className="barsss"
          style={{
            height: `${
              (Number(dataItem?.node1_policy?.min_htlc) / 19200) * 100
            }%`,
          }}
        ></div>
        <div
          className="x-spread"
          style={{
            height: `${
              (Number(dataItem?.node1_policy?.fee_rate_milli_msat) / 400) * 2000
            }%`,
          }}
        ></div>
        <div
          className="xx-spread"
          style={{
            height: `${Number(dataItem?.capacity) / 20000000}%`,
          }}
        ></div>
        <div
          className="xxxx-spread"
          style={{
            height: `${
              Number(dataItem?.node1_policy?.max_htlc_msat) / 8000000000
            }%`,
          }}
        ></div>
        <div
          className="xxx-spread"
          style={{
            height: `${(Number(dataItem?.node2_policy?.min_htlc) / 19200) * 30}%`,
          }}
        ></div>
      </div>
      <div className="display-spread">{(Number(dataItem?.capacity) / 1000) }</div>
    </div>
  );
};

export default ChannelBar;
