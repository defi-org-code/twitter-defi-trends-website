import amplitude from "amplitude-js";

declare const process: {
  env: {
    REACT_APP_AMPLITUDE: string;
    NODE_ENV?: string;
  };
};

class Analytics {
  init() {
    if (process.env.REACT_APP_AMPLITUDE && process.env.NODE_ENV !== "development") {
      amplitude.getInstance().init(process.env.REACT_APP_AMPLITUDE);
    }
  }
  sendEvent(event: string, data?: any) {
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
