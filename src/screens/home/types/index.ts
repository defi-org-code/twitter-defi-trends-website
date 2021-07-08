import { JSXElementConstructor, ReactElement } from "react";
import { JsxElement } from "typescript";
export interface IDatasetElement {
  name: string;
  count: number;
  y?: number;
  processed: number;
  extra: any;
  lastUpdateTime: string;
}

export enum DATASET_NAMES {
  HASHTAGS = "hashtags",
  CASHTAGS = "cashtags",
  MENTIONS = "mentions",
  URLS = "urls",
}

export interface IDatasets {
  [DATASET_NAMES.HASHTAGS]: IDatasetElement[];
  [DATASET_NAMES.CASHTAGS]: IDatasetElement[];
  [DATASET_NAMES.MENTIONS]: IDatasetElement[];
  [DATASET_NAMES.URLS]: IDatasetElement[];
}

export interface IUser {
  displayName: string;
  followers: number;
  following: number;
  name: string;
  profileImage: string;
}
export interface ITweet {
  text: string;
  user: IUser;
}

export interface IListCategory {
  symbol: string;
  image: string;
  title: string;
  shortName: string;
  component: JSXElementConstructor<any>;
}

export interface IListCategories {
  [DATASET_NAMES.HASHTAGS]: IListCategory;
  [DATASET_NAMES.CASHTAGS]: IListCategory;
  [DATASET_NAMES.MENTIONS]: IListCategory;
  [DATASET_NAMES.URLS]: IListCategory;
}

export interface IHeaderCounterData {
  title: string;
  image: string;
  name: string;
  count: number;
}

export interface IRawTweet {
  count: number;
  lastUpdateTime: string;
  name: string;
  processed: number;
  extra: any;
}

export interface IRawTweets {
  [DATASET_NAMES.HASHTAGS]: IRawTweet[];
  [DATASET_NAMES.CASHTAGS]: IRawTweet[];
  [DATASET_NAMES.MENTIONS]: IRawTweet[];
  [DATASET_NAMES.URLS]: IRawTweet[];
}

export interface ITopTweets {
  type: number;
  count: number;
  name: string;
}

export interface IViewOption {
  title: string;
  value: VIEW_SELECTOR_OPTIONS;
  image: string;
  url: string;
  SelectorCustomComponent?: JSXElementConstructor<any>;
  ListCustomComponent?: JSXElementConstructor<any>;
  darkImage: string;
  apiIntervalSeconds: number;
  countForAnimation: number;
  positionsJumpForAnimation: number;
}

export enum VIEW_SELECTOR_OPTIONS {
  ALL_TWEETS = "all_tweets",
  INFLUENCERS = "influencers",
}

export interface IViewToHide {
  view: VIEW_SELECTOR_OPTIONS;
  isBigger: boolean;
}
