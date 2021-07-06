import { DATASET_NAMES, VIEW_SELECTOR_OPTIONS } from "../types";

export const categortiesDictionary: { [key: string]: DATASET_NAMES } = {
  "0": DATASET_NAMES.CASHTAGS,
  "1": DATASET_NAMES.HASHTAGS,
  "2": DATASET_NAMES.URLS,
  "3": DATASET_NAMES.MENTIONS,
};

export const LIST_ITEM_ANIMATION_TIMEOUT_SECONDS = 5;
export const COUNT_TO_JUMP = 100;
export const POSITIONS_TO_JUMP = 5;
export const INTERVAL_DELAY_SECONDS = 61;
export const LIST_ELEMENT_DEFAULT_HEIGHT = 51;
export const LIST_ELEMENT_OPENED_HEIGHT = 238;
export const GET_TWEETS_API_URL =
  "https://uft4jjndug.execute-api.us-east-2.amazonaws.com/dev/fetchTopEntities";
export const API_ITEMS_LIMIT = 70;

export const PERIOD_ENTITIES_API =
  "https://uft4jjndug.execute-api.us-east-2.amazonaws.com/dev/fetchPeriodTopEntities";

export const LISTS_AMOUNT = 4;
export const MOBILE_WIDTH_LIMIT = 600;
export const MOBILE_LIST_LIMIT = 3;

export const LIST_HIDE_ANIMATION_CONFIG = {
  [VIEW_SELECTOR_OPTIONS.ALL_TWEETS]: {
    animationDoneTimeout: 600,
    animationDelay: 0,
  },
  [VIEW_SELECTOR_OPTIONS.INFLUENCERS]: {
    animationDoneTimeout: 800,
    animationDelay: 0.2,
  },
};

export const DEFAULT_API_RETRIES = 3;

export const API_RETRIES_DELAY = 200;
