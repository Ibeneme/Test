import React from "react";

const TableHeader: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Peer</th>
          <th>ID</th>
          <th>Capacity</th>
          <th>Block Age</th>
          {/* <th>Transaction</th> */}
          <th>Bas (Sat)</th>
          {/* <th>max_htlc_msat t</th> */}
          <th>Time Lock Delta</th>
        </tr>
      </thead>
    </table>
  );
};

export default TableHeader;
