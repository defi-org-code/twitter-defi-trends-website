import React, { useRef, useState } from "react";
import ViewSelector from "../ViewSelector";
import { viewSelectorOptions } from "../../constants";
import { IViewOption, VIEW_SELECTOR_OPTIONS } from "../../types";
import ListsContainer from "../ListsContainer";
import InfluencersContainer from "../InfluencersContainer";

const TweetsContainer = () => {
  const [viewName, setViewName] = useState(VIEW_SELECTOR_OPTIONS.ALL_TWEETS);
  const [
    elementToHide,
    setElementToHide,
  ] = useState<VIEW_SELECTOR_OPTIONS | null>(null);
  const handleViewSelect = (name: VIEW_SELECTOR_OPTIONS) => {
    setViewName(name);
  };

  return (
    <div className="home-tweets">
      <ViewSelector
        options={viewSelectorOptions}
        handleViewSelect={handleViewSelect}
        selected={viewName}
      />
      <InfluencersContainer
        isActive={viewName === VIEW_SELECTOR_OPTIONS.INFLUENCERS}
      />
      {viewSelectorOptions.map((viewOption: IViewOption) => {
        if (viewName === viewOption.value) {
          return (
            <ListsContainer
              url={viewOption.url}
              key={viewOption.title}
              hide={false}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default TweetsContainer;
