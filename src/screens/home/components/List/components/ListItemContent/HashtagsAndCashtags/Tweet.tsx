import React from "react";

const Tweet = ({ tweet }: any) => {
  const { user, text } = tweet;
  const { displayName, name, profileImage } = user;
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
        <p className="hashtag-tweet-content-text">{text}</p>
      </section>
    </li>
  );
};

export default Tweet;
