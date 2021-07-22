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

export type EventTypes =
  | DATASET_TYPES
  | VIEW_SELECTOR_OPTIONS
  | THEMES
  | PERIODS;

export interface IEventProperties {
  type?: EventTypes;
  isMobile: boolean;
}

export interface IEvent {
  event: ANALYTICS_EVENTS;
  properties: IEventProperties;
}
