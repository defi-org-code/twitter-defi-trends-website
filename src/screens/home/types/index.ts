import { JSXElementConstructor } from "react";
export interface IDatasetElement {
  name: string;
  count: number;
  y?: number;
  processed: number;
  extra: any;
  lastUpdateTime: string;
}

export enum DATASET_TYPES {
  HASHTAGS = "hashtags",
  CASHTAGS = "cashtags",
  MENTIONS = "mentions",
  URLS = "urls",
}

export interface IDatasets {
  [DATASET_TYPES.HASHTAGS]: IDatasetElement[];
  [DATASET_TYPES.CASHTAGS]: IDatasetElement[];
  [DATASET_TYPES.MENTIONS]: IDatasetElement[];
  [DATASET_TYPES.URLS]: IDatasetElement[];
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
  id?: string;
}

export interface IListCategory {
  symbol: string;
  image: string;
  title: string;
  shortName: string;
  component: JSXElementConstructor<any>;
  titleImg: string;
  titleDarkImg: string;
}

export interface IListCategories {
  [DATASET_TYPES.HASHTAGS]: IListCategory;
  [DATASET_TYPES.CASHTAGS]: IListCategory;
  [DATASET_TYPES.MENTIONS]: IListCategory;
  [DATASET_TYPES.URLS]: IListCategory;
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
  [DATASET_TYPES.HASHTAGS]: IRawTweet[];
  [DATASET_TYPES.CASHTAGS]: IRawTweet[];
  [DATASET_TYPES.MENTIONS]: IRawTweet[];
  [DATASET_TYPES.URLS]: IRawTweet[];
}

export interface IPeriodData {
  type: number;
  count: number;
  name: string;
  extra?: string;
}

export interface IViewOption {
  title: string;
  mobileTitle?: string;
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
