import { DATASET_TYPES, VIEW_SELECTOR_OPTIONS } from "../types";

export const categortiesDictionary: { [key: string]: DATASET_TYPES } = {
  "0": DATASET_TYPES.CASHTAGS,
  "1": DATASET_TYPES.HASHTAGS,
  "2": DATASET_TYPES.URLS,
  "3": DATASET_TYPES.MENTIONS,
};

export const ON_FIRE_LIST_ITEM_ANIMATION_DURATION_SECONDS = 121;
export const COUNT_TO_JUMP_TO_SHOW_ON_FIRE_ANIMATION = 14;
export const POSITIONS_TO_JUMP_TO_SHOW_ON_FIRE_ANIMATION = 1;
export const POLL_NEW_TWEETS_INTERVAL_DELAY_SECONDS = 121;
export const LIST_ELEMENT_DEFAULT_HEIGHT = 51;
export const LIST_ELEMENT_OPENED_HEIGHT = 285;
export const LIST_ELEMENT_OPENED_HEIGHT_MOBILE = 353;
export const GET_TAG_TWEETS_INTERVAL = 12;
export const LISTS_AMOUNT_FOR_ANIMATION_IN_TAB = 4;
export const MOBILE_LIST_LIMIT = 4;

export const LIST_HIDE_ANIMATION_CONFIG = {
  [VIEW_SELECTOR_OPTIONS.ALL_TWEETS]: {
    animationDoneTimeout: 500,
    animationDelay: 0,
  },
  [VIEW_SELECTOR_OPTIONS.VARIFIED_USERS]: {
    animationDoneTimeout: 700,
    animationDelay: 0.2,
  },
};

export const DEFAULT_API_RETRIES = 3;
export const API_RETRIES_DELAY = 200;
export const FETCH_VERIFIED_USERS_INTERVAL = 121;

export const DEFI_ORG_URL = "https://twitter.defi.org";
export const TWITTER_DEFI_ORG_HANDLE = "@DefiOrg";
export const TWEET_TEXT = `I also want to be verified by ${TWITTER_DEFI_ORG_HANDLE} and appear on ${DEFI_ORG_URL}`;
