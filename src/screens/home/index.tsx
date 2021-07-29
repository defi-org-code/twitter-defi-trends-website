import { useCallback, useRef, useState } from "react";
import { sleep } from "../../utils";
import ListsContainer from "./components/ListsContainer";
import ViewSelector from "./components/ViewSelector";
import { views } from "./data/views";
import Footer from "../../components/Footer";
import AppLoader from "../../components/AppLoader";
import {
  VIEW_SELECTOR_OPTIONS,
  IViewOption,
  HIDE_LISTS_DIRECTION,
} from "./types";

const Home = () => {
  const [currentView, setCurrentView] = useState(
    VIEW_SELECTOR_OPTIONS.ALL_TWEETS
  );
  const currentViewDelay = useRef(views[0].animatiomEndTimeout);
  const [hideCurrentView, setHideCurrentView] = useState(false);
  const [
    hideListsDirection,
    setHideListsDirection,
  ] = useState<HIDE_LISTS_DIRECTION>(HIDE_LISTS_DIRECTION.LEFT);

  const handleViewSelectDesktop = useCallback(
    async (nextView: VIEW_SELECTOR_OPTIONS, delay: number) => {
      if (nextView === currentView) return;
      const nextViewIndex = views.findIndex((e) => e.value === nextView);
      const currentViewIndex = views.findIndex((e) => e.value === currentView);
      setHideCurrentView(true);
      setHideListsDirection(
        nextViewIndex > currentViewIndex
          ? HIDE_LISTS_DIRECTION.LEFT
          : HIDE_LISTS_DIRECTION.RIGHT
      );
      await sleep(currentViewDelay.current);
      currentViewDelay.current = delay;
      setCurrentView(nextView);
      setHideCurrentView(false);
    },
    [currentView]
  );

  const handleViewSelectMobile = (nextView: VIEW_SELECTOR_OPTIONS) => {
    setCurrentView(nextView);
  };
  return (
    <AppLoader>
      <div className="home">
        <div className="home-flex">
          <ViewSelector
            options={views}
            handleViewSelectDesktop={handleViewSelectDesktop}
            handleViewSelectMobile={handleViewSelectMobile}
          />
          {views.map((viewOption: IViewOption) => {
            if (currentView === viewOption.value) {
              return (
                <ListsContainer
                  key={viewOption.title}
                  hideView={hideCurrentView}
                  hideListsDirection={hideListsDirection}
                  viewOption={viewOption}
                />
              );
            }
            return null;
          })}
        </div>
        <Footer />
      </div>
    </AppLoader>
  );
};

export default Home;
