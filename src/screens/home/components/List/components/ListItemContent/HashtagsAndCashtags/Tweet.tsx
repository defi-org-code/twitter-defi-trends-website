import React, { useMemo } from "react";

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

const Tweet = ({ tweet }: any) => {
  const { user, text } = tweet;
  const { displayName, name, profileImage } = user;
  const memoizedText = useMemo(() => handleText(text), [text]);
  return (
    <li className="hashtag-tweet flex">
      {profileImage && (
        <img src={profileImage} alt="profile" className="hashtag-tweet-image" />
      )}
      <section className="hashtag-tweet-content">
        <span className="hashtag-tweet-content-top flex">
          <p>{displayName}</p>
          <p>{`@${name}`}</p>
        </span>
        <p className="hashtag-tweet-content-text">{memoizedText}</p>
      </section>
    </li>
  );
};

export default Tweet;
