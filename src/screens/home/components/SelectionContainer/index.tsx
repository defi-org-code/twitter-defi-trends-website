import React, { useState } from "react";
import InfluencersContainer from "../InfluencersContainer";
import TweetsImg from "../../../../assets/images/twitter-small.png";
import InfluencerImg from "../../../../assets/images/influencer-small.png";
import { GET_TWEETS_API_URL } from "../../constants";
interface ISelector {
  title: string;
  value: string;
  image: string;
  url: string;
}

const selectors = [
  {
    title: "All Tweets",
    value: "all_tweets",
    image: TweetsImg,
    url: GET_TWEETS_API_URL,
  },
  {
    title: "Tweets By Verified Users",
    value: "influencers",
    image: InfluencerImg,
    url: "www.lalal.com",
  },
];

interface IProps {
  setNewEndpointUrl: (newUrl: string) => void;
}

const SelectionContainer = ({ setNewEndpointUrl }: IProps) => {
  const [category, setCategory] = useState("all_tweets");

  const select = (newCategory: string, url: string) => {
    // setNewEndpointUrl(url);
    setCategory(newCategory);
  };

  return (
    <>
      <div className="home-selection flex">
        {selectors.map((selector: ISelector) => {
          const { title, value, image, url } = selector;
          return (
            <section
              key={title}
              className={
                category === value
                  ? "home-selection-selector home-selection-selector-active"
                  : "home-selection-selector"
              }
              onClick={() => select(value, url)}
            >
              <img src={image} alt={title} />
              <p> {title}</p>
            </section>
          );
        })}
      </div>
      <InfluencersContainer isActive={category === "influencers"} />
    </>
  );
};

export default SelectionContainer;
