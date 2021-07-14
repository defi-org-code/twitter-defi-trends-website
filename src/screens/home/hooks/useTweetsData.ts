/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import useInterval from "../../../hooks/useInterval";
import { GET_HASHTAG_TWEETS_INTERVAL } from "../constants";
import { ITweet } from "../types";
import { v4 as uuidv4 } from "uuid";

interface IUseFetch {
  sinceId: string;
  tweets: ITweet[];
}
declare var process: {
  env: {
    REACT_APP_HASHTAG_TWEETS_API: string;
  };
};

const useTweetsData = (
  name: string,
  symbol: string
): [ITweet[], boolean, boolean] => {
  const apiUrl = process.env.REACT_APP_HASHTAG_TWEETS_API;
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const sinceIdRef = useRef<string | null>(null);
  const encodedParams = window.encodeURIComponent(`${symbol}${name}`);
  const url = `${apiUrl}/${encodedParams}`;
  const [data, fetch, error] = useFetch<IUseFetch>(url);
  const mountRef = useRef(true);
  useEffect(() => {
    if (data) {
      handleTweets(data.tweets, data.sinceId);
    }
  }, [data]);

  useEffect(() => {
    fetch().then();
    return () => {
      mountRef.current = false;
    };
  }, []);

  const handleTweets = useCallback(
    (newTweets: ITweet[], sinceId: string) => {
      sinceIdRef.current = sinceId;
      const tweetsToInsert = newTweets.map((t: ITweet) => {
        return {
          ...t,
          id: uuidv4(),
        };
      });
      const currentTweets = [...tweets];
      currentTweets.unshift(...tweetsToInsert);
      if (mountRef.current) {
        setTweets(currentTweets);
      }
    },
    [tweets]
  );

  const fecthDataWithSinceId = () => {
    const urlWithSiceId = encodeURI(`${apiUrl}/${name}/${sinceIdRef.current}`);
    if (!mountRef.current) return;
    fetch(urlWithSiceId);
  };

  useInterval(fecthDataWithSinceId, GET_HASHTAG_TWEETS_INTERVAL);
  return [tweets, !data, error];
};

export default useTweetsData;
