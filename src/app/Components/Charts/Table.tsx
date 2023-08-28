import React from "react";
import { usePagination } from "../../Hooks/usePagination";
import { Pagination } from "./Pagination";
import ChannelRow from "./ChannelTables";
import { TableRowProps } from "../../Types/Types";
import { Channel, TableProps } from "../../Types/Types";
import TableHeader from "./TableHeader";

export const ChannelsTables: React.FC<TableProps> = ({
  channels,
}: {
  channels: Channel[];
}) => {
  const ITEMS_PER_PAGE = 3;
  const { currentPage, displayedChannels, totalPages, nextPage, prevPage } =
    usePagination(channels, ITEMS_PER_PAGE);

  return (
    <div
      style={{
        marginTop: "12px",
      }}
    >
      <table>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {displayedChannels.map((channel, index) => (
            <TableRow
              key={channel.chan_point}
              channel={channel}
              index={index}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </div>
  );
};



const TableRow: React.FC<TableRowProps> = ({ channel, index }) => {
  return (
    <ChannelRow key={channel.chan_point} channel={channel} index={index} />
  );
};
