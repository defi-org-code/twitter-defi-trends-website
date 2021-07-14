import amplitude from "amplitude-js";

declare var process: {
  env: {
    REACT_APP_AMPLITUDE: string;
  };
};

class Analytics {
  init() {
    amplitude.getInstance().init(process.env.REACT_APP_AMPLITUDE);
    console.log("analytics enabled");
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
