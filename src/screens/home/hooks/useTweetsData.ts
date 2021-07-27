/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import useInterval from "../../../hooks/useInterval";
import { GET_TAG_TWEETS_INTERVAL } from "../constants";
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

const createUrl = (name: string, symbol: string, sinceId?: string) => {
  const encodedParams = encodeURIComponent(`${symbol}${name}`);
  if (sinceId) {
    return `${process.env.REACT_APP_HASHTAG_TWEETS_API}/${encodedParams}/${sinceId}`;
  } else {
    return `${process.env.REACT_APP_HASHTAG_TWEETS_API}/${encodedParams}`;
  }
};

const modifier = (data: IUseFetch) => {
  const modifiedTweets = data.tweets.map((t: ITweet) => {
    return {
      ...t,
      id: uuidv4(),
    };
  });

  return { ...data, tweets: modifiedTweets };
};

const handleTweetsContainerUpdate = (
  setTweets: () => void,
  container: HTMLDivElement | undefined
) => {
  if (!container) {
    setTweets();
    return;
  }
  const curScrollPos = container.scrollTop;
  const oldScroll = container.scrollHeight - container.clientHeight;

  setTweets();
  setTimeout(() => {
    const newScroll = container.scrollHeight - container.clientHeight;
    container.scrollTop = curScrollPos + (newScroll - oldScroll);
  }, 0);
};

const useTweetsData = (
  name: string,
  symbol: string,
  container: HTMLDivElement | undefined
): [ITweet[], boolean, boolean] => {
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const sinceIdRef = useRef<string | undefined>(undefined);
  const mountRef = useRef(true);
  const [data, getData, error] = useFetch<IUseFetch>(modifier);

  useEffect(() => {
    if (!data) return;
    const current = [...tweets];
    current.unshift(...data.tweets);
    handleTweetsContainerUpdate(() => setTweets(current), container);
    if (data.sinceId) {
      sinceIdRef.current = data.sinceId;
    }
  }, [data && data.sinceId]);

  useEffect(() => {
    getData(createUrl(name, symbol)).then(() => {
      set();
    });
    return () => {
      mountRef.current = false;
    };
  }, []);

  const fecthDataWithSinceId = () => {
    if (!sinceIdRef.current) return;
    const urlWithSiceId = createUrl(name, symbol, sinceIdRef.current);
    if (!mountRef.current) return;
    getData(urlWithSiceId);
  };

  const [_clear, set] = useInterval(
    fecthDataWithSinceId,
    GET_TAG_TWEETS_INTERVAL
  );
  return [tweets, !data, error];
};

export default useTweetsData;
