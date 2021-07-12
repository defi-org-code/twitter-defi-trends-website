/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import useInterval from "../../../hooks/useInterval";
import {
  GET_HASHTAG_TWEETS_API,
  GET_HASHTAG_TWEETS_INTERVAL,
} from "../constants";
import { ITweet } from "../types";
import { v4 as uuidv4 } from "uuid";

interface IUseFetch {
  sinceId: string;
  tweets: ITweet[];
}

const useTweetsData = (name: string): [ITweet[], boolean, boolean] => {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const sinceIdRef = useRef<string | null>(null);
  const url = encodeURI(`${GET_HASHTAG_TWEETS_API}/${name}`);
  const [data, fetch, error] = useFetch<IUseFetch>(url);
  const mountRef = useRef(true);
  useEffect(() => {
    if (data && mountRef.current) {
      handleTweets(data.tweets, data.sinceId);
    }
  }, [data]);

  useEffect(() => {
    fetch().then();
    return () => {
      mountRef.current = false;
    };
  }, []);

  const handleTweets = (newTweets: ITweet[], sinceId: string) => {
    sinceIdRef.current = sinceId;
    const tweetsToInsert = newTweets.map((t: ITweet) => {
      return {
        ...t,
        id: uuidv4(),
      };
    });

    setTweets([...tweetsToInsert, ...tweets]);
  };

  const fecthDataWithSinceId = () => {
    const urlWithSiceId = encodeURI(
      `${GET_HASHTAG_TWEETS_API}/${name}/${sinceIdRef.current}`
    );
    fetch(urlWithSiceId);
  };

  useInterval(fecthDataWithSinceId, GET_HASHTAG_TWEETS_INTERVAL);
  return [tweets, !data, error];
};

export default useTweetsData;
