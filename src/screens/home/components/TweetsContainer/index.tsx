import React, { useState } from "react";
import ViewSelector from "../ViewSelector";
import { LIST_HIDE_ANIMATION_CONFIG } from "../../constants";
import { IViewOption, IViewToHide, VIEW_SELECTOR_OPTIONS } from "../../types";
import ListsContainer from "../ListsContainer";
import InfluencersContainer from "../InfluencersContainer";
import { viewSelectorOptions } from "../../data";

const TweetsContainer = () => {
  const [view, setView] = useState(VIEW_SELECTOR_OPTIONS.ALL_TWEETS);
  const [viewToHide, setViewToHide] = useState<IViewToHide | null>(null);
  const handleViewSelect = (nextView: VIEW_SELECTOR_OPTIONS) => {
    if (nextView === view) return;
    const nextViewIndex = viewSelectorOptions.findIndex(
      (e) => e.value === nextView
    );
    const currentViewIndex = viewSelectorOptions.findIndex(
      (e) => e.value === view
    );
    const viewToHideObj = {
      view,
      isBigger: nextViewIndex > currentViewIndex,
    };
    setViewToHide(viewToHideObj);
    setTimeout(() => {
      setView(nextView);
    }, LIST_HIDE_ANIMATION_CONFIG[view].animationDoneTimeout);
  };

  return (
    <div className="home-tweets">
      <ViewSelector
        options={viewSelectorOptions}
        handleViewSelect={handleViewSelect}
        selected={view}
      />
      <InfluencersContainer
        isActive={
          view === VIEW_SELECTOR_OPTIONS.INFLUENCERS &&
          viewToHide?.view !== VIEW_SELECTOR_OPTIONS.INFLUENCERS
        }
      />
      {viewSelectorOptions.map((viewOption: IViewOption) => {
        if (view === viewOption.value) {
          return (
            <ListsContainer
              url={viewOption.url}
              key={viewOption.title}
              viewToHide={viewToHide}
              viewOption={viewOption}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default TweetsContainer;
