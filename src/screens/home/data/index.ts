import images from "../../../constans/images";
import {
  DATASET_TYPES,
  IListCategories,
  VIEW_SELECTOR_OPTIONS,
} from "./../types/index";
import VarifiedUsersViewCustom from "../components/ViewSelector/components/VarifiedUsersViewCustom";
import Mentions from "../components/ListsContainer/components/ListItemMentions";
import Urls from "../components/ListsContainer/components/ListItemUrl";
import AllTweetsViewCustom from "../components/ViewSelector/components/AllTweetsViewCustom";
import HashtagsAndCashtags from "../components/ListsContainer/components/ListItemHashtagsCashtags";
import InfluencersContainer from "../components/InfluencersContainer";
import {COUNT_TO_JUMP, INTERVAL_DELAY_SECONDS, POSITIONS_TO_JUMP} from "../constants";

declare var process: {
  env: {
    REACT_APP_TWEETS_BY_LIST_API: string;
    REACT_APP_TOP_ENTETIES_API: string;
  };
};

//this array is responsible for the lists and selectors
export const views = [
  {
    title: "All Tweets",
    value: VIEW_SELECTOR_OPTIONS.ALL_TWEETS,
    image: images.allTweetsIcon.img,
    darkImage: images.allTweetsIconDark.img,
    SelectorCustomComponent: AllTweetsViewCustom,
    url: process.env.REACT_APP_TOP_ENTETIES_API,
    apiIntervalSeconds: INTERVAL_DELAY_SECONDS,
    countForAnimation: COUNT_TO_JUMP,
    positionsJumpForAnimation: POSITIONS_TO_JUMP,
  },
  {
    title: "Tweets By Verified Users",
    mobileTitle: " Verified Tweets",
    value: VIEW_SELECTOR_OPTIONS.INFLUENCERS,
    image: images.verifiedUsersSelect.img,
    darkImage: images.verifiedUsersSelectDark.img,
    SelectorCustomComponent: VarifiedUsersViewCustom,
    ListCustomComponent: InfluencersContainer,
    url: process.env.REACT_APP_TWEETS_BY_LIST_API,
    apiIntervalSeconds: INTERVAL_DELAY_SECONDS,
    countForAnimation: COUNT_TO_JUMP,
    positionsJumpForAnimation: POSITIONS_TO_JUMP,
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
