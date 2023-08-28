import { useApolloClient, useQuery } from "@apollo/client";
import { ChannelData } from "../Types/Types";
import { CHANNELS_QUERY } from "../GraphQL/grahQL";  

function useChannelsData(pubkey: string) {
  const client = useApolloClient();

  const { loading, error, data } = useQuery<ChannelData, { pubkey: string }>(
    CHANNELS_QUERY,
    {
      variables: { pubkey },
      context: {
        headers: {
          "cache-control": "no-store",
          "content-type": "application/json; charset=utf-8",
        },
      },
    }
  );
  console.log(data)
  return { loading, error, data };
}


export default useChannelsData;
