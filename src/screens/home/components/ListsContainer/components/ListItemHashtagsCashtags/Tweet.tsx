import { useMemo } from "react";
import ImgComponent from "../../../../../../components/ImgComponent";
import { ITweet } from "../../../../types";

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

const Tweet = ({ tweet }: IProps) => {
  const { user, text } = tweet;
  const { displayName, name, profileImage } = user;
  const memoizedText = useMemo(() => handleText(text), [text]);

  return (
    <div className="tweet">
      <div className="tweet-flex">
        <ImgComponent src={profileImage} alt="user" />
        <section className="tweet-content">
          <span className="tweet-content-top flex">
            <p>{displayName}</p>
            <p>{`@${name}`}</p>
          </span>
          <p className="tweet-content-text">{memoizedText}</p>
        </section>
      </div>
      <div className="tweet-margin"></div>
    </div>
  );
};

export default Tweet;
