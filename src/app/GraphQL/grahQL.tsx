import { gql } from "@apollo/client";


export const CHANNELS_QUERY = gql`
  query GetChannels($pubkey: String!) {
    getNode(pubkey: $pubkey) {
      graph_info {
        channels {
          channel_list {
            list {
              block_age
              capacity
              chan_point
              last_update_date
              node1_policy {
                disabled
                fee_base_msat
                fee_rate_milli_msat
                max_htlc_msat
                min_htlc
                time_lock_delta
              }
              node1_pub
              node2_policy {
                disabled
                fee_base_msat
                fee_rate_milli_msat
                max_htlc_msat
                min_htlc
                time_lock_delta
              }
              node2_pub
              short_channel_id
              node2_info {
                node {
                  alias
                }
              }
            }
          }
        }
      }
    }
  }
`;
