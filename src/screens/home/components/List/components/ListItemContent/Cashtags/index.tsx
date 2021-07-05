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

const Cashtags = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 50);
  }, []);

  return (
    <div className="cashtags" style={{ opacity: isOpen ? 1 : 0 }}>
      <section className="cashtags-top flex">
        <p>live tweets</p>
        <LiveAnimation />
      </section>

      <ul className="cashtags-list">
        {tweets.map((tweet: ITweet, index: number) => {
          const { image, title, author, text } = tweet;
          return (
            <li key={`${index}`} className="cashtags-element flex">
              <figure className="cashtags-element-image">
                {image && <img src={image} alt="tweet icon" />}
              </figure>
              <section className="cashtags-element-content">
                <span className="cashtags-element-content-top flex">
                  <p>{title}</p>
                  <p>{`@${author}`}</p>
                </span>
                <p className="cashtags-element-content-text">
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

export default Cashtags;
