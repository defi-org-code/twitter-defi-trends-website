import {
  DATASET_NAMES,
  IListCategories,
  VIEW_SELECTOR_OPTIONS,
} from "../types";
import CashtagImg from "../../../assets/images/cashtags.png";
import HashtagImg from "../../../assets/images/hashtags.png";
import MentionsImg from "../../../assets/images/mentions.png";
import UrlsImg from "../../../assets/images/urls.png";
import TweetsImg from "../../../assets/images/twitter-small.png";
import InfluencerImg from "../../../assets/images/influencer-small.png";
import Hashtags from "../components/List/components/ListItemContent/Hashtags";
import Cashtags from "../components/List/components/ListItemContent/Cashtags";
import Mentions from "../components/List/components/ListItemContent/Mentions";
import Urls from "../components/List/components/ListItemContent/Urls";

export const categories: IListCategories = {
  [DATASET_NAMES.HASHTAGS]: {
    symbol: "#",
    image: HashtagImg,
    title: "Popular #Hashtags",
    shortName: "Hashtag",
    component: Hashtags,
  },
  [DATASET_NAMES.CASHTAGS]: {
    symbol: "$",
    image: CashtagImg,
    title: "Popular $Cashtag",
    shortName: "Cashtag",
    component: Cashtags,
  },
  [DATASET_NAMES.MENTIONS]: {
    symbol: "@",
    image: MentionsImg,
    title: "Popular @Mentions",
    shortName: "Mentions",
    component: Mentions,
  },
  [DATASET_NAMES.URLS]: {
    symbol: "🔗",
    image: UrlsImg,
    title: "Popular #URL’s",
    shortName: "URL’s",
    component: Urls,
  },
};

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

export const viewSelectorOptions = [
  {
    title: "All Tweets",
    value: VIEW_SELECTOR_OPTIONS.ALL_TWEETS,
    image: TweetsImg,
    url: GET_TWEETS_API_URL,
  },
  {
    title: "Tweets By Verified Users",
    value: VIEW_SELECTOR_OPTIONS.INFLUENCERS,
    image: InfluencerImg,
    url: GET_TWEETS_API_URL,
  },
];

export const LISTS_AMOUNT = 4;

export const MOBILE_WIDTH_LIMIT = 600;
export const MOBILE_LIST_LIMIT = 3;
