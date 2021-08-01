import images from "../../../constans/images";
import { DATASET_TYPES, IListCategories } from "../types";
import Urls from "../components/ListsContainer/components/ListItemUrl";
import HashtagsAndCashtags from "../components/ListsContainer/components/ListItemHashtagsCashtags";

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
    component: HashtagsAndCashtags,
  },
  [DATASET_TYPES.URLS]: {
    symbol: "🔗",
    image: images.urls.img,
    titleImg: images.urlsTitle.img,
    titleDarkImg: images.urlsTitleDark.img,
    title: "Popular #URLs",
    shortName: "URL",
    component: Urls,
  },
};
