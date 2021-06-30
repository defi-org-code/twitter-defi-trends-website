import React, { useState } from "react";
import InfluencersContainer from "../InfluencersContainer";
import TweetsImg from "../../../../assets/images/twitter-small.png";
import InfluencerImg from "../../../../assets/images/influencer-small.png";
interface ISelector {
  title: string;
  value: string;
  image: string;
  extra?: any;
}

const selectors = [
  {
    title: "All Tweets",
    value: "all_tweets",
    image: TweetsImg,
  },
  {
    title: "Influencers",
    extra: "▼",
    value: "influencers",
    image: InfluencerImg,
  },
];

const SelectionContainer = () => {
  const [category, setCategory] = useState("all_tweets");
  return (
    <>
      <div className="home-selection flex">
        {selectors.map((selector: ISelector) => {
          const { title, value, image, extra } = selector;
          return (
            <section
              key={title}
              className={
                category === value
                  ? "home-selection-selector home-selection-selector-active"
                  : "home-selection-selector"
              }
              onClick={() => setCategory(value)}
            >
              <img src={image} alt={title} />
              <span className="flex">
                <p> {title}</p>
                <span className="home-selection-selector-extra">{extra}</span>
              </span>
            </section>
          );
        })}
      </div>
      <InfluencersContainer isActive={category === "influencers"} />
    </>
  );
};

export default SelectionContainer;
