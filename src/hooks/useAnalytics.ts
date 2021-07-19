import {
  DATASET_TYPES,
  PERIODS,
  THEMES,
  VIEW_SELECTOR_OPTIONS,
} from "./../screens/home/types/index";
import { ANALYTICS_EVENTS, eventTypes } from "./../services/analytics/types";
import analytics from "../services/analytics";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

function useAnalytics(): {
  init: () => void;
  tapOnEntity: (entity: DATASET_TYPES) => void;
  switchTab: (value: VIEW_SELECTOR_OPTIONS) => void;
  tapOnViewAll: (
    value: DATASET_TYPES | VIEW_SELECTOR_OPTIONS.VARIFIED_USERS
  ) => void;
  tapOnPeriodView: (period: PERIODS) => void;
  tapOnMenu: () => void;
  tapOnThemeSelect: (theme: THEMES) => void;
  tapOnWantToBeMentioned: () => void;
  tapOnWantToBeMentionedTweet: () => void;
} {
  const { isMobile } = useContext(ThemeContext);

  const {
    TAP_ON_ENTITY,
    SWITCH_TAB,
    TAP_ON_PERIOD_VIEW,
    TAP_ON_MENU,
    THEME_SELECT,
    MOBILE_VIEW_ALL,
    TAP_ON_WANT_TO_BE_MENTIONED,
    TAP_ON_WANT_TO_BE_MENTIONED_TWEET,
  } = ANALYTICS_EVENTS;

  const init = () => {
    analytics.init();
  };
  const tapOnWantToBeMentioned = () => {
    analytics.sendEvent(TAP_ON_WANT_TO_BE_MENTIONED, {
      isMobile,
    });
  };

  const tapOnWantToBeMentionedTweet = () => {
    analytics.sendEvent(TAP_ON_WANT_TO_BE_MENTIONED_TWEET, {
      isMobile,
    });
  };

  const tapOnEntity = (entity: DATASET_TYPES) => {
    analytics.sendEvent(TAP_ON_ENTITY, {
      type: eventTypes[TAP_ON_ENTITY][entity],
      isMobile,
    });
  };

  const switchTab = (value: VIEW_SELECTOR_OPTIONS) => {
    analytics.sendEvent(SWITCH_TAB, {
      type: eventTypes[SWITCH_TAB][value],
      isMobile,
    });
  };

  const tapOnViewAll = (
    entity: DATASET_TYPES | VIEW_SELECTOR_OPTIONS.VARIFIED_USERS
  ) => {
    analytics.sendEvent(MOBILE_VIEW_ALL, {
      type: eventTypes[MOBILE_VIEW_ALL][entity],
      isMobile: true,
    });
  };

  const tapOnPeriodView = (period: PERIODS) => {
    analytics.sendEvent(TAP_ON_PERIOD_VIEW, {
      type: eventTypes[TAP_ON_PERIOD_VIEW][period],
      isMobile: true,
    });
  };

  const tapOnMenu = () => {
    analytics.sendEvent(TAP_ON_MENU, {
      isMobile: true,
    });
  };

  const tapOnThemeSelect = (theme: THEMES) => {
    analytics.sendEvent(THEME_SELECT, {
      type: eventTypes[THEME_SELECT][theme],
      isMobile,
    });
  };

  return {
    tapOnEntity,
    switchTab,
    tapOnViewAll,
    tapOnPeriodView,
    tapOnMenu,
    tapOnThemeSelect,
    tapOnWantToBeMentioned,
    tapOnWantToBeMentionedTweet,
    init,
  };
}

export default useAnalytics;
