import {
  DATASET_TYPES,
  PERIODS,
  THEMES,
  VIEW_SELECTOR_OPTIONS,
} from "./../../screens/home/types/index";
export enum ANALYTICS_EVENTS {
  TAP_ON_ENTITY = "TAP_ON_ENTITY",
  SWITCH_TAB = "SWITCH_TAB",
  MOBILE_VIEW_ALL = "MOBILE_VIEW_ALL",
  TAP_ON_PERIOD_VIEW = "TAP_ON_PERIOD_VIEW",
  TAP_ON_MENU = "TAP_ON_MENU",
  PAGE_VIEW = "PAGE_VIEW",
  THEME_SELECT = "THEME_SELECT",
  TAP_ON_WANT_TO_BE_MENTIONED = "TAP_ON_WANT_TO_BE_MENTIONED",
  TAP_ON_WANT_TO_BE_MENTIONED_TWEET = "TAP_ON_WANT_TO_BE_MENTIONED_TWEET",
}

export const eventTypes = {
  [ANALYTICS_EVENTS.TAP_ON_ENTITY]: {
    [DATASET_TYPES.HASHTAGS]: "hashtags",
    [DATASET_TYPES.CASHTAGS]: "cashtags",
    [DATASET_TYPES.MENTIONS]: "mentions",
    [DATASET_TYPES.URLS]: "urls",
  },
  [ANALYTICS_EVENTS.MOBILE_VIEW_ALL]: {
    [DATASET_TYPES.HASHTAGS]: "hashtags",
    [DATASET_TYPES.CASHTAGS]: "cashtags",
    [DATASET_TYPES.MENTIONS]: "mentions",
    [DATASET_TYPES.URLS]: "urls",
    [VIEW_SELECTOR_OPTIONS.VARIFIED_USERS]: "Varified users",
  },
  [ANALYTICS_EVENTS.TAP_ON_PERIOD_VIEW]: {
    [PERIODS.WEEK]: "week",
    [PERIODS.YESTERDAY]: "yesterday",
  },
  [ANALYTICS_EVENTS.SWITCH_TAB]: {
    [VIEW_SELECTOR_OPTIONS.ALL_TWEETS]: "All tweets",
    [VIEW_SELECTOR_OPTIONS.VARIFIED_USERS]: "Varified users",
  },
  [ANALYTICS_EVENTS.THEME_SELECT]: {
    [THEMES.DARK]: "dark",
    [THEMES.LIGHT]: "light",
  },
};

export interface IEventProperties {
  type?: string;
  isMobile: boolean;
}

export interface IEvent {
  event: ANALYTICS_EVENTS;
  properties: IEventProperties;
}
