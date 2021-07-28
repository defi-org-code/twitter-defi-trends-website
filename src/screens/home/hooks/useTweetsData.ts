/* eslint-disable react-hooks/exhaustive-deps */
import { MutableRefObject, useCallback, useEffect, useRef } from "react";
import useFetch from "../../../hooks/useFetch";
import useInterval from "../../../hooks/useInterval";
import { GET_TAG_TWEETS_INTERVAL } from "../constants";
import { ITweet } from "../types";
import { v4 as uuidv4 } from "uuid";
import { keepSamePositionInsideList } from "../../../utils/ui";

interface IUseFetch {
  sinceId: string;
  tweets: ITweet[];
}

const createUrl = (
  apiUrl: string,
  name: string,
  symbol: string,
  sinceId?: string
) => {
  const encodedParams = encodeURIComponent(`${symbol}${name}`);

  if (sinceId) {
    const url = apiUrl.replace(":id", `${encodedParams}/${sinceId}`);
    return url;
  } else {
    const url = apiUrl.replace(":id", `${encodedParams}`);
    return url;
  }
};

const useTweetsData = (
  apiUrl: string,
  name: string,
  symbol: string,
  container: MutableRefObject<HTMLDivElement | null>
): [ITweet[], boolean, boolean] => {
  const sinceIdRef = useRef<string | undefined>(undefined);
  const mountRef = useRef(true);
  const tweetsRef = useRef<ITweet[]>([]);

  const modifier = useCallback((data: IUseFetch): ITweet[] => {
    if (!data) return [];
    sinceIdRef.current = data.sinceId;
    const modifiedTweets = data.tweets.map((t: ITweet) => {
      return {
        ...t,
        id: uuidv4(),
      };
    });

    const result = [...modifiedTweets, ...tweetsRef.current];
    keepSamePositionInsideList(container.current);
    return result;
  }, []);

  const [tweets, getTweets, error] = useFetch<ITweet[], IUseFetch>(modifier);
  const tweetsLength = tweets ? tweets.length : 0;

  useEffect(() => {
    if (tweets) {
      tweetsRef.current = tweets;
    }
  }, [tweetsLength]);

  useEffect(() => {
    getTweets(createUrl(apiUrl, name, symbol)).then(() => {
      set();
    });
    return () => {
      mountRef.current = false;
    };
  }, []);

  const fecthDataWithSinceId = () => {
    if (!sinceIdRef.current) return;
    const urlWithSiceId = createUrl(apiUrl, name, symbol, sinceIdRef.current);
    if (!mountRef.current) return;
    getTweets(urlWithSiceId);
  };

  const { set } = useInterval(fecthDataWithSinceId, GET_TAG_TWEETS_INTERVAL);
  return [tweets || [], !tweets, error];
};

export default useTweetsData;
