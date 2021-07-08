import { GET_TWEETS_API_URL } from "./../constants/index";
import images from "../../../constans/images";
import {
  DATASET_NAMES,
  IListCategories,
  VIEW_SELECTOR_OPTIONS,
} from "./../types/index";
import VarifiedUsersViewCustom from "../components/ViewSelector/components/VarifiedUsersViewCustom";
import Mentions from "../components/List/components/ListItemContent/Mentions";
import Urls from "../components/List/components/ListItemContent/Urls";
import AllTweetsViewCustom from "../components/ViewSelector/components/AllTweetsViewCustom";
import HashtagsAndCashtags from "../components/List/components/ListItemContent/HashtagsAndCashtags";
import InfluencersContainer from "../components/InfluencersContainer";

//this array is responsible for the lists and selectors
export const views = [
  {
    title: "All Tweets",
    value: VIEW_SELECTOR_OPTIONS.ALL_TWEETS,
    image: images.allTweetsIcon.img,
    darkImage: images.allTweetsIconDark.img,
    SelectorCustomComponent: AllTweetsViewCustom,
    url: GET_TWEETS_API_URL,
    apiIntervalSeconds: 8,
    countForAnimation: 1,
    positionsJumpForAnimation: 5,
  },
  {
    title: "Tweets By Verified Users",
    value: VIEW_SELECTOR_OPTIONS.INFLUENCERS,
    image: images.verifiedUsersSelect.img,
    darkImage: images.verifiedUsersSelectDark.img,
    SelectorCustomComponent: VarifiedUsersViewCustom,
    ListCustomComponent: InfluencersContainer,
    //change here the api to the get by varified users
    url: GET_TWEETS_API_URL,
    apiIntervalSeconds: 7,
    countForAnimation: 10,
    positionsJumpForAnimation: 5,
  },
];

export const categories: IListCategories = {
  [DATASET_NAMES.HASHTAGS]: {
    symbol: "#",
    image: images.hashtag.img,
    title: "Popular #Hashtags",
    shortName: "Hashtag",
    component: HashtagsAndCashtags,
  },
  [DATASET_NAMES.CASHTAGS]: {
    symbol: "$",
    image: images.cashtag.img,
    title: "Popular $Cashtag",
    shortName: "Cashtag",
    component: HashtagsAndCashtags,
  },
  [DATASET_NAMES.MENTIONS]: {
    symbol: "@",
    image: images.menstions.img,
    title: "Popular @Mentions",
    shortName: "Mentions",
    component: Mentions,
  },
  [DATASET_NAMES.URLS]: {
    symbol: "🔗",
    image: images.urls.img,
    title: "Popular #URL’s",
    shortName: "URL’s",
    component: Urls,
  },
};
