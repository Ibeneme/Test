
export interface Node {
    alias: string;
  }
  
  export interface Node2Info {
    node: Node;
  }
  
  export interface Policy {
    disabled: boolean;
    fee_base_msat: string;
    fee_rate_milli_msat: string;
    max_htlc_msat: string;
    min_htlc: string;
    time_lock_delta: number;
  }
  
  export interface ChannelList {
    list: Channel[];
  }
  
  export interface ChannelsData {
    graph_info: {
      channels: {
        channel_list: ChannelList;
      };
    };
  }
  
  export interface ChannelData {
    getNode: ChannelsData;
  }
  
  export interface Channel {
    block_age: number;
    capacity: string;
    chan_point: string;
    last_update_date: string;
    node1_policy: Policy;
    node1_pub: string;
    node2_policy: Policy;
    node2_pub: string;
    short_channel_id: string;
    node2_info: Node2Info;
  }
  
  export interface TableProps {
    channels: Channel[];
  }
  
  export interface ApolloClientProviderProps {
    pubkey: string;
    children: React.ReactNode;
  }


export interface ChannelsContainerProps {
  pubkey: string;
}
export interface BarChartProps {
  channels: Channel[];
}
export interface ChannelBarProps {
  dataItem: Channel;
}
export interface TableRowProps {
  channel: Channel;
  index: number;
}

export interface ChannelBoxProps {
  displayText: string;
}