import { ANALYTICS_EVENTS, EventTypes } from "./../services/analytics/types";
import analytics from "../services/analytics";
import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider";

interface AnalyticsProvider {
  init: () => void;
  sendEvent: (event: ANALYTICS_EVENTS, type?: EventTypes) => void;
  sendEventAndRunAction: (
    event: ANALYTICS_EVENTS,
    type?: EventTypes,
    otherFunc?: () => void
  ) => void;
}

function useAnalytics(): AnalyticsProvider {
  const { isMobile } = useContext(ThemeContext);

  const init = () => {
    analytics.init();
  };

  const sendEventAndRunAction = (
    event: ANALYTICS_EVENTS,
    type?: EventTypes,
    otherFunc?: () => void
  ) => {
    sendEvent(event, type);
    otherFunc?.();
  };

  const sendEvent = (event: ANALYTICS_EVENTS, type?: EventTypes) => {
    console.log(event, type);
    analytics.sendEvent(event, {
      type,
      isMobile,
    });
  };

  return {
    sendEvent,
    init,
    sendEventAndRunAction,
  };
}

export default useAnalytics;
