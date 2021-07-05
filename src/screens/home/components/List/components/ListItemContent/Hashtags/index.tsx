import React, { useEffect, useState } from "react";
import dataGenerator from "../../../../../../../services/data-generator";
import { ITweet } from "../../../../../types";
import LiveAnimation from "../../LiveAnimation";
const tweets = dataGenerator.createTweetLiveData();

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

const Hashtags = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 50);
  }, []);
  const className = isOpen
    ? "list-item-tweets list-item-tweets-active"
    : "list-item-tweets";
  return (
    <div className={className}>
      <section className="list-item-tweets-top flex">
        <p>live tweets</p>
        <LiveAnimation />
      </section>

      <ul className="list-item-tweets-list">
        {tweets.map((tweet: ITweet, index: number) => {
          const { image, title, author, text } = tweet;
          return (
            <li key={`${index}`} className="live-tweet flex">
              <figure className="live-tweet-image">
                {image && <img src={image} alt="tweet icon" />}
              </figure>
              <section className="live-tweet-content">
                <span className="live-tweet-content-top flex">
                  <p>{title}</p>
                  <p>{`@${author}`}</p>
                </span>
                <p className="live-tweet-content-text">
                  {handleText(text, "#Cryptocurrency")};
                </p>
              </section>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Hashtags;
