import React from "react";
import { Channel } from "../../Types/Types";
import { useTheme } from "../../Provider/ThemeProvider";
interface ChannelRowProps {
  channel: Channel;
  index: number;
}

const ChannelRow: React.FC<ChannelRowProps> = ({ channel, index }) => {
  const theme = useTheme();
  return (

      <table className="table-table">

        <tbody >
          <tr key={channel.chan_point}>
            <td data-label="#">{index + 1}</td>
            <td data-label="PEER" className="Peer-table">{channel.node2_info.node.alias}</td>
            <td data-label="ID">{channel.short_channel_id}</td>
            <td data-label="capacity">{channel.capacity}</td>
            <td data-label="BLOCK AGE">{channel.block_age}days</td>
            <td data-label="BAS (SAT)">
              {" "}
              {channel.node1_policy.fee_base_msat}
            </td>
            {/* <td data-label='ID'>{channel.node1_policy.max_htlc_msat}</td>*/}
            <td data-label="TLD">{channel.node1_policy.time_lock_delta}</td>
          </tr>
        </tbody>
      </table>

  );
};

export default ChannelRow;
