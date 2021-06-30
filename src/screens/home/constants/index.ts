import { DATASET_NAMES, IListCategories } from "../types";
import CashtagImg from "../../../assets/images/cashtags.png";
import HashtagImg from "../../../assets/images/hashtags.png";
import MentionsImg from "../../../assets/images/mentions.png";
import UrlsImg from "../../../assets/images/urls.png";

export const categories: IListCategories = {
  [DATASET_NAMES.HASHTAGS]: {
    symbol: "#",
    image: HashtagImg,
    title: "Popular #Hashtags",
    shortName: "Hashtag",
  },
  [DATASET_NAMES.CASHTAGS]: {
    symbol: "₿",
    image: CashtagImg,
    title: "Popular $Cashtag",
    shortName: "Cashtag",
  },
  [DATASET_NAMES.MENTIONS]: {
    symbol: "@",
    image: MentionsImg,
    title: "Popular @Mentions",
    shortName: "Mentions",
  },
  [DATASET_NAMES.URLS]: {
    symbol: "🔗",
    image: UrlsImg,
    title: "Popular #URL’s",
    shortName: "urls",
  },
};

export const categortyTypesDictionary: { [key: string]: DATASET_NAMES } = {
  "0": DATASET_NAMES.CASHTAGS,
  "1": DATASET_NAMES.HASHTAGS,
  "2": DATASET_NAMES.URLS,
  "3": DATASET_NAMES.MENTIONS,
};

export const INTERVAL_DELAY_SECONDS = 60;
export const LIST_ELEMENT_DEFAULT_HEIGHT = 51;
export const LIST_ELEMENT_OPENED_HEIGHT = 238;
export const GET_TWEETS_API_URL =
  "https://uft4jjndug.execute-api.us-east-2.amazonaws.com/dev/fetchTopEntities";
export const API_ITEMS_LIMIT = 70;

export const PERIOD_ENTITIES_API =
  "https://uft4jjndug.execute-api.us-east-2.amazonaws.com/dev/fetchPeriodTopEntities";
