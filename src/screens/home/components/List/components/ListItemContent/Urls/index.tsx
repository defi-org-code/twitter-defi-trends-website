import React, { useEffect, useState } from "react";
import { IDatasetElement } from "../../../../../types";

interface IProps {
  item: IDatasetElement;
}
const Urls = ({ item }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 50);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <div
      className="list-item-urls"
      style={{ paddingTop: "80px", opacity: isOpen ? 1 : 0 }}
    >
      <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="dark"
          data-tweet-limit="5"
          data-chrome="noheader nofooter noborders"
          href={item.name}
          target="_blank"
          rel="noreferrer"
        ></a>
      </div>
    </div>
  );
};

export default Urls;
