import { DATASET_TYPES, VIEW_SELECTOR_OPTIONS } from "../types";

export const categortiesDictionary: { [key: string]: DATASET_TYPES } = {
  "0": DATASET_TYPES.CASHTAGS,
  "1": DATASET_TYPES.HASHTAGS,
  "2": DATASET_TYPES.URLS,
  "3": DATASET_TYPES.MENTIONS,
};

export const LIST_ITEM_ANIMATION_TIMEOUT_SECONDS = 2;
export const COUNT_TO_JUMP = 6;
export const POSITIONS_TO_JUMP = 5;
export const INTERVAL_DELAY_SECONDS = 4;
export const LIST_ELEMENT_DEFAULT_HEIGHT = 51;
export const LIST_ELEMENT_OPENED_HEIGHT = 245;
export const LIST_ELEMENT_OPENED_HEIGHT_MOBILE = 353;
export const API_ITEMS_LIMIT = 70;
export const GET_HASHTAG_TWEETS_INTERVAL = 5;
export const LISTS_AMOUNT = 4;
export const MOBILE_LIST_LIMIT = 3;

export const LIST_HIDE_ANIMATION_CONFIG = {
  [VIEW_SELECTOR_OPTIONS.ALL_TWEETS]: {
    animationDoneTimeout: 500,
    animationDelay: 0,
  },
  [VIEW_SELECTOR_OPTIONS.INFLUENCERS]: {
    animationDoneTimeout: 700,
    animationDelay: 0.2,
  },
};

export const DEFAULT_API_RETRIES = 3;
export const API_RETRIES_DELAY = 200;
export const FETCH_VERIFIED_USERS_INTERVAL = 60;
