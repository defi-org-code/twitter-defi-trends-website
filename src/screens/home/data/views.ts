import images from "../../../constans/images";
import InfluencersContainer from "../components/InfluencersContainer";
import AllTweetsViewCustom from "../components/ViewSelector/components/AllTweetsViewCustom";
import RetweetsViewCustom from "../components/ViewSelector/components/RetweetsViewCustom/Desktop";
import VerifiedUsersViewCustom from "../components/ViewSelector/components/VerifiedUsersViewCustom";
import {
  POLL_NEW_TWEETS_INTERVAL_DELAY_SECONDS,
  COUNT_TO_JUMP_TO_SHOW_ON_FIRE_ANIMATION,
  POSITIONS_TO_JUMP_TO_SHOW_ON_FIRE_ANIMATION,
} from "../constants";
import { VIEW_SELECTOR_OPTIONS } from "../types";

declare const process: {
  env: {
    REACT_APP_TWEETS_BY_LIST_API: string;
    REACT_APP_ALL_TWEETS_API: string;
    REACT_APP_NO_RETWEETS_API: string;
    REACT_APP_PERIOD_ENTITIES_API: string;
    REACT_APP_PERIOD_ENTITIES_WITHOUT_RETWEETS_API: string;
    REACT_APP_PERIOD_ENTITIES_BY_LIST_API: string;
    REACT_APP_TWEETS_BY_TAG_API: string;
    REACT_APP_TWEETS_BY_TAG_NO_RETWEETS_API: string;
  };
};

export const views = [
  {
    title: "All Tweets",
    value: VIEW_SELECTOR_OPTIONS.ALL_TWEETS,
    image: images.allRetweetsIcon.img,
    darkImage: images.allRetweetsIconDark.img,
    SelectorCustomComponent: AllTweetsViewCustom,
    url: process.env.REACT_APP_ALL_TWEETS_API,
    periodApiUrl: process.env.REACT_APP_PERIOD_ENTITIES_API,
    tweetsUrl: process.env.REACT_APP_TWEETS_BY_TAG_API,
    apiIntervalSeconds: POLL_NEW_TWEETS_INTERVAL_DELAY_SECONDS,
    countForAnimation: COUNT_TO_JUMP_TO_SHOW_ON_FIRE_ANIMATION,
    positionsJumpForAnimation: POSITIONS_TO_JUMP_TO_SHOW_ON_FIRE_ANIMATION,
    animatiomEndTimeout: 650,
  },

  {
    title: "Without Re-Tweets",
    mobileTitle: "Without Re-Tweets",
    value: VIEW_SELECTOR_OPTIONS.NO_RETWEETS,
    image: images.noRetweetsIcon.img,
    darkImage: images.noRetweetsDarkIcon.img,
    SelectorCustomComponent: RetweetsViewCustom,
    url: process.env.REACT_APP_NO_RETWEETS_API,
    periodApiUrl: process.env.REACT_APP_PERIOD_ENTITIES_WITHOUT_RETWEETS_API,
    tweetsUrl: process.env.REACT_APP_TWEETS_BY_TAG_NO_RETWEETS_API,
    apiIntervalSeconds: POLL_NEW_TWEETS_INTERVAL_DELAY_SECONDS,
    countForAnimation: COUNT_TO_JUMP_TO_SHOW_ON_FIRE_ANIMATION,
    positionsJumpForAnimation: POSITIONS_TO_JUMP_TO_SHOW_ON_FIRE_ANIMATION,
    animatiomEndTimeout: 750,
  },
  {
    title: "Tweets By Verified Users",
    mobileTitle: "Verified Tweets",
    value: VIEW_SELECTOR_OPTIONS.VARIFIED_USERS,
    image: images.verifiedUsersSelect.img,
    darkImage: images.verifiedUsersSelectDark.img,
    SelectorCustomComponent: VerifiedUsersViewCustom,
    ListCustomComponent: InfluencersContainer,
    url: process.env.REACT_APP_TWEETS_BY_LIST_API,
    periodApiUrl: process.env.REACT_APP_PERIOD_ENTITIES_BY_LIST_API,
    tweetsUrl: process.env.REACT_APP_TWEETS_BY_TAG_API,
    apiIntervalSeconds: POLL_NEW_TWEETS_INTERVAL_DELAY_SECONDS,
    countForAnimation: COUNT_TO_JUMP_TO_SHOW_ON_FIRE_ANIMATION,
    positionsJumpForAnimation: POSITIONS_TO_JUMP_TO_SHOW_ON_FIRE_ANIMATION,
    animatiomEndTimeout: 600,
  },
];
