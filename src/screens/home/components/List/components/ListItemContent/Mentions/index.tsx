import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../../../../../../../providers/ThemeProvider";
import { IDatasetElement } from "../../../../../types";

interface IProps {
  item: IDatasetElement;
}

const Mentions = ({ item }: IProps) => {
  const { name } = item;
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    embed();
  }, []);

  const embed = async () => {
    try {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "twitter-timeline");
      anchor.setAttribute("data-theme", `${isDarkMode ? "dark" : "light"}`);
      anchor.setAttribute("data-tweet-limit", "5");
      anchor.setAttribute("data-chrome", "noheader nofooter noborders");
      anchor.setAttribute("href", `https://twitter.com/${name}`);
      document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

      const script = document.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      await document
        .getElementsByClassName("twitter-embed")[0]
        .appendChild(script);
    } catch (error) {
      console.log("error");
    }
    setIsLoading(false);
  };

  return (
    <div ref={ref} className="list-item-mentions">
      {isLoading && <p>is loading...</p>}
      <div className="twitter-embed"></div>
    </div>
  );
};

export default Mentions;
