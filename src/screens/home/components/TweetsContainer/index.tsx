import React, { useState } from "react";
import ViewSelector from "../ViewSelector";
import { LIST_HIDE_ANIMATION_CONFIG } from "../../constants";
import { IViewOption, IViewToHide, VIEW_SELECTOR_OPTIONS } from "../../types";
import ListsContainer from "../ListsContainer";
import { views } from "../../data";

const TweetsContainer = () => {
  const [view, setView] = useState(VIEW_SELECTOR_OPTIONS.ALL_TWEETS);
  const [viewToHide, setViewToHide] = useState<IViewToHide | null>(null);

  const handleViewSelect = (nextView: VIEW_SELECTOR_OPTIONS) => {
    if (nextView === view) return;
    const nextViewIndex = views.findIndex((e) => e.value === nextView);
    const currentViewIndex = views.findIndex((e) => e.value === view);
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
      <ViewSelector options={views} handleViewSelect={handleViewSelect} />

      {views.map((viewOption: IViewOption) => {
        if (view === viewOption.value) {
          return (
            <ListsContainer
              key={viewOption.title}
              viewToHide={viewToHide}
              viewOption={viewOption}
              CustomComponent={viewOption.ListCustomComponent}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default TweetsContainer;
