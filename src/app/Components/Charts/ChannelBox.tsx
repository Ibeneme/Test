import React from "react";
import { ChannelBoxProps } from "../../Types/Types";


const ChannelBox: React.FC<ChannelBoxProps> = ({ displayText }) => {

  return <div className="rectangleStyle">{displayText}</div>;
};

export default ChannelBox;
