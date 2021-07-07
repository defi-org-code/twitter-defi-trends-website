import React, { useEffect, useState, useRef } from "react";
import useFetch from "../../../../../../../hooks/useFetch";
import useInterval from "../../../../../../../hooks/useInterval";
import { GET_HASHTAG_TWEETS_API } from "../../../../../constants";
import { IDatasetElement } from "../../../../../types";
import LiveAnimation from "../../LiveAnimation";
import HashtagTweet from "./Tweet";
const handleText = (text: string, value: string) => {
  const str = text.toLowerCase();
  const title = value.toLowerCase();
  const result = str.split(title);
  return (
    <span>
      {result[0]} <a href="/">{value}</a>
      {result[1]}
    </span>
  );
};
interface IProps {
  item: IDatasetElement;
  symbol: string;
}

const Hashtags = ({ item, symbol }: IProps) => {
  const { name } = item;
  const [tweets, setTweets] = useState<any>([]);
  const sinceIdRef = useRef<string | null>(null);
  const url = encodeURI(`${GET_HASHTAG_TWEETS_API}/${name}`);
  const [data, error, loading, fetchData] = useFetch(url, true);
  console.log({ symbol });
  useEffect(() => {
    if (data) {
      sinceIdRef.current = data.sinceId;
      setTweets((t: any) => [...data.tweets, ...t]);
    }
  }, [data]);

  const fecthDataWithSinceId = () => {
    const urlWithSiceId = encodeURI(
      `${GET_HASHTAG_TWEETS_API}/${name}/${sinceIdRef.current}`
    );
    fetchData(urlWithSiceId);
  };
  console.log({ data });

  const [clear, set, reset] = useInterval(fecthDataWithSinceId, 5);

  return (
    <div className="list-item-hashtags">
      <section className="list-item-hashtags-top flex">
        <p>Live tweets</p>
        <LiveAnimation />
      </section>

      {data && (
        <ul className="list-item-hashtags-list">
          {tweets.map((tweet: any, index: number) => {
            return <HashtagTweet key={`${index}`} tweet={tweet} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Hashtags;
