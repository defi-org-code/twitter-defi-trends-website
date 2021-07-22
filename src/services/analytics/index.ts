import amplitude from "amplitude-js";
import { ANALYTICS_EVENTS, IEventProperties } from "./types";

declare const process: {
  env: {
    REACT_APP_AMPLITUDE: string;
    NODE_ENV?: string;
  };
};

class Analytics {

  isInProd: boolean = true;

  init() {
    this.isInProd = process.env.NODE_ENV !== "development";
    if (
      process.env.REACT_APP_AMPLITUDE && this.isInProd
    ) {
      amplitude.getInstance().init(process.env.REACT_APP_AMPLITUDE);
      this.sendEvent(ANALYTICS_EVENTS.PAGE_VIEW);
    }
  }

  sendEvent(event: ANALYTICS_EVENTS, data?: IEventProperties) {
    if (this.isInProd) {
      if (!data) {
        amplitude.getInstance().logEvent(event);
      } else {
        amplitude.getInstance().logEvent(event, data);
      }
    } else {
      console.log(event, data);
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
