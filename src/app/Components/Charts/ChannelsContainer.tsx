import React from "react";
import { ChannelsTables } from "./Table";
import useChannelsData from "../../Hooks/useChannelData";
import { ChannelsContainerProps } from "../../Types/Types";
import ChannelBox from "./ChannelBox";
import "./styles.css";
import ShimmerLoader from "../../States/Loading";
import BarChart from "../Graphs/Barchart";
import CustomError from "../../States/Error";

const ChannelsContainer: React.FC<ChannelsContainerProps> = ({ pubkey }) => {
  const { loading, error, data } = useChannelsData(pubkey);

  if (loading)
    return (
      <div>
        <ShimmerLoader />
      </div>
    );
  if (error)
    return (
      <div>
        <CustomError
          src="https://res.cloudinary.com/dqa2jr535/image/upload/v1693201171/yellow_404_jfoky0.png"
          message={error.message}
        />
      </div>
    );

  const channels = data!.getNode.graph_info.channels.channel_list.list;
  console.log(channels);
  return (
    <div>
      <ChannelBox displayText="Graphical Representation" />
      <BarChart channels={channels} />
      <div className="div-for-channel-bos-and-channels-tables">
        <ChannelBox displayText="Tabular Representation" />
        <ChannelsTables channels={channels} />
      </div>
    </div>
  );
};

export default ChannelsContainer;
