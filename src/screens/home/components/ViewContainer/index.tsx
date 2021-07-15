import { useState } from "react";
import ViewSelector from "../ViewSelector";
import { LIST_HIDE_ANIMATION_CONFIG } from "../../constants";
import { IViewOption, IViewToHide, VIEW_SELECTOR_OPTIONS } from "../../types";
import ListsContainer from "../ListsContainer";
import { views } from "../../data";
import { sleep } from "../../../../utils";

const ViewContainer = () => {
  const [view, setView] = useState(VIEW_SELECTOR_OPTIONS.ALL_TWEETS);
  const [viewToHide, setViewToHide] = useState<IViewToHide | null>(null);

  const handleViewSelectDesktop = async (nextView: VIEW_SELECTOR_OPTIONS) => {
    if (nextView === view) return;
    const nextViewIndex = views.findIndex((e) => e.value === nextView);
    const currentViewIndex = views.findIndex((e) => e.value === view);
    const viewToHideObj = {
      view,
      isBigger: nextViewIndex > currentViewIndex,
    };
    setViewToHide(viewToHideObj);
    await sleep(LIST_HIDE_ANIMATION_CONFIG[view].animationDoneTimeout);
    setView(nextView);
  };

  const handleViewSelectMobile = (nextView: VIEW_SELECTOR_OPTIONS) => {
    setView(nextView);
  };

  const showView = (views: IViewOption[]) => {
    return views.map((viewOption: IViewOption) => {
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
    });
  };

  return (
    <>
      <ViewSelector
        options={views}
        handleViewSelectDesktop={handleViewSelectDesktop}
        handleViewSelectMobile={handleViewSelectMobile}
      />
      {showView(views)}
    </>
  );
};

export default ViewContainer;
