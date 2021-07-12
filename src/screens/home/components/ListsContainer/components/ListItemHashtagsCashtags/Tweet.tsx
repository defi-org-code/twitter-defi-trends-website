import React, { useEffect, useMemo, useState } from "react";
import ImgComponent from "../../../../../../components/ImgComponent";
import { ITweet } from "../../../../types";
import AnimateHeight from "react-animate-height";

const handleText = (text: string) => {
  const splittedText = text.replaceAll("\n", " ").split(" ");
  return splittedText.map((str: string, index: number) => {
    if (str.indexOf("#") === 0) {
      return <strong key={index}>{`${str} `}</strong>;
    } else {
      return `${str} `;
    }
  });
};

interface IProps {
  tweet: ITweet;
  index: number;
}

const Tweet = ({ tweet, index }: IProps) => {
  const { user, text } = tweet;
  const [show, setShow] = useState(false);
  const { displayName, name, profileImage } = user;
  const memoizedText = useMemo(() => handleText(text), [text]);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 10);
  }, []);

  return (
    <AnimateHeight duration={500} height={show ? "auto" : 0}>
      <li className="tweet flex">
        <ImgComponent src={profileImage} alt="user" />
        <section className="tweet-content">
          <span className="tweet-content-top flex">
            <p>{displayName}</p>
            <p>{`@${name}`}</p>
          </span>
          <p className="tweet-content-text">{memoizedText}</p>
        </section>
      </li>
    </AnimateHeight>
  );
};

export default Tweet;
