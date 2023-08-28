import React from "react";
import ChannelsContainer from "./Charts/ChannelsContainer";
import CustomSVG from "./Charts/Styles/SVGs/CustomSVG";
import "../Styles/globals.css";

type Props = {
  pubkey: string;
};

export const Index = ({ pubkey }: Props) => {
  return (
    <div className={`container-folder`}>
      <div>
        <CustomSVG />
      </div>
      <div className="components-folder">
        <ChannelsContainer pubkey={pubkey} />
      </div>
    </div>
  );
};
