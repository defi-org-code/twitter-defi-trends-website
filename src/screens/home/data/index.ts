import { GET_TWEETS_API_URL } from "./../constants/index";
import images from "../../../constans/images";
import {
  DATASET_NAMES,
  IListCategories,
  VIEW_SELECTOR_OPTIONS,
} from "./../types/index";
import VarifiedUsersView from "../components/ViewSelector/components/VarifiedUsersView";
import Hashtags from "../components/List/components/ListItemContent/Hashtags";
import Cashtags from "../components/List/components/ListItemContent/Cashtags";
import Mentions from "../components/List/components/ListItemContent/Mentions";
import Urls from "../components/List/components/ListItemContent/Urls";
export const viewSelectorOptions = [
  {
    title: "All Tweets",
    value: VIEW_SELECTOR_OPTIONS.ALL_TWEETS,
    image: images.allTweetsIcon.img,
    darkImage: images.allTweetsIconDark.img,
    url: GET_TWEETS_API_URL,
  },
  {
    title: "Tweets By Verified Users",
    value: VIEW_SELECTOR_OPTIONS.INFLUENCERS,
    image: images.verifiedUsersSelect.img,
    darkImage: images.verifiedUsersSelectDark.img,
    url: GET_TWEETS_API_URL,
    CustomComponent: VarifiedUsersView,
  },
];

export const categories: IListCategories = {
  [DATASET_NAMES.HASHTAGS]: {
    symbol: "#",
    image: images.hashtag.img,
    title: "Popular #Hashtags",
    shortName: "Hashtag",
    component: Hashtags,
  },
  [DATASET_NAMES.CASHTAGS]: {
    symbol: "$",
    image: images.cashtag.img,
    title: "Popular $Cashtag",
    shortName: "Cashtag",
    component: Cashtags,
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
