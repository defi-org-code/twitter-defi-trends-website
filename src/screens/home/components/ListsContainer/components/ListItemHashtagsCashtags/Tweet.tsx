import React, {ReactElement, useMemo} from "react";
import ImgComponent from "../../../../../../components/ImgComponent";
import { ITweet } from "../../../../types";

const handleText = (categoryTitle: string, text: string) => {
  const parts:Array<string | ReactElement<any, any>> = [];
  text.split(new RegExp(`${categoryTitle}\\s`)).forEach((part: string, index: number) => {
    parts.push(part);
    parts.push(<strong key={index}> {categoryTitle} </strong>);
  });
  return parts;
};

interface IProps {
  tweet: ITweet;
  categoryTitle: string;
}

const Tweet = ({ tweet, categoryTitle }: IProps) => {
  const { user, text } = tweet;
  const { displayName, name, profileImage } = user;
  const memoizedText = useMemo(() => handleText(categoryTitle, text), [
    categoryTitle,
    text,
  ]);

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
      <div className="tweet-margin"/>
    </div>
  );
};

export default Tweet;
