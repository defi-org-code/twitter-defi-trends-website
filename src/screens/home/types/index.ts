export interface IDatasetElement {
  name: string;
  count: number;
  y?: number;
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

export interface ITweet {
  image: string;
  title: string;
  author: string;
  text: string;
}

export interface IListCategory {
  symbol: string;
  image: string;
  title: string;
  shortName: string;
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

interface IRawTweet {
  count: number;
  lastUpdateTime: string;
  name: string;
  processed: number;
}

export interface IRawTweets {
  [DATASET_NAMES.HASHTAGS]: IRawTweet[];
  [DATASET_NAMES.CASHTAGS]: IRawTweet[];
  [DATASET_NAMES.MENTIONS]: IRawTweet[];
  [DATASET_NAMES.URLS]: IRawTweet[];
}

export interface IInfluencer {
  name: string;
  avatar: string;
  username: string;
  following: number;
  followers: number;
}

export interface ITopTweets {
  type: number;
  count: number;
  name: string;
}
