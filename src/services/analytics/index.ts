import amplitude from "amplitude-js";
import { ANALYTICS_EVENTS, IEventProperties } from "./types";

declare const process: {
  env: {
    REACT_APP_AMPLITUDE: string;
    NODE_ENV?: string;
  };
};

class Analytics {
  init() {
    if (
      process.env.REACT_APP_AMPLITUDE &&
      process.env.NODE_ENV !== "development"
    ) {
      amplitude.getInstance().init(process.env.REACT_APP_AMPLITUDE);
      this.sendEvent(ANALYTICS_EVENTS.PAGE_VIEW);
    }
  }

  sendEvent(event: ANALYTICS_EVENTS, data?: IEventProperties) {
    if (!data) {
      amplitude.getInstance().logEvent(event);
    } else {
      amplitude.getInstance().logEvent(event, data);
    }
  }

  setUserProperties(properties: any) {
    amplitude.getInstance().setUserProperties(properties);
  }
  setUserId(id: string) {
    amplitude.getInstance().setUserId(id);
  }
}

export default new Analytics();
