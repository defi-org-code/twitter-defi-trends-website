import {
  GET_TWEETS_API_URL,
  GET_TWEETS_BY_LIST_API_URL,
} from "./../constants/index";
import images from "../../../constans/images";
import {
  DATASET_TYPES,
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
    countForAnimation: 100,
    positionsJumpForAnimation: 1,
  },
  {
    title: "Tweets By Verified Users",
    value: VIEW_SELECTOR_OPTIONS.INFLUENCERS,
    image: images.verifiedUsersSelect.img,
    darkImage: images.verifiedUsersSelectDark.img,
    SelectorCustomComponent: VarifiedUsersViewCustom,
    ListCustomComponent: InfluencersContainer,
    url: GET_TWEETS_BY_LIST_API_URL,
    apiIntervalSeconds: 7,
    countForAnimation: 10,
    positionsJumpForAnimation: 1,
  },
];

export const categories: IListCategories = {
  [DATASET_TYPES.HASHTAGS]: {
    symbol: "#",
    image: images.hashtag.img,
    titleImg: images.hashtagsTitle.img,
    titleDarkImg: images.hashtagsTitleDark.img,
    title: "Popular #Hashtags",
    shortName: "Hashtag",
    component: HashtagsAndCashtags,
  },
  [DATASET_TYPES.CASHTAGS]: {
    symbol: "$",
    image: images.cashtag.img,
    titleImg: images.cashtagsTitle.img,
    titleDarkImg: images.cashtagsTitleDark.img,
    title: "Popular $Cashtag",
    shortName: "Cashtag",
    component: HashtagsAndCashtags,
  },
  [DATASET_TYPES.MENTIONS]: {
    symbol: "@",
    image: images.menstions.img,
    titleImg: images.mentionsTitle.img,
    titleDarkImg: images.mentionsTitleDark.img,
    title: "Popular @Mentions",
    shortName: "Mentions",
    component: Mentions,
  },
  [DATASET_TYPES.URLS]: {
    symbol: "🔗",
    image: images.urls.img,
    titleImg: images.urlsTitle.img,
    titleDarkImg: images.urlsTitleDark.img,
    title: "Popular #URL’s",
    shortName: "URL’s",
    component: Urls,
  },
};
