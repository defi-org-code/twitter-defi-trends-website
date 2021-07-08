import { DATASET_NAMES } from "./../../screens/home/types/index";
import { IDatasetElement, IHeaderCounterData } from "../../screens/home/types";
import SymbolImg from "../../assets/images/symbol.png";
import TweetPlaceholderImg from "../../assets/images/tweet-placeholder.png";
import AvatarImg from "../../assets/images/avatar.png";

class DataGenerator {
  num = 0;
  createDatasets(lists: number): Array<IDatasetElement[]> {
    const arr: any = {};
    for (let i = 0; i < lists; i++) {
      const data = this.createDataset(30);
      if (i === 0) {
        arr[DATASET_NAMES.HASHTAGS] = data;
      }
      if (i === 1) {
        arr[DATASET_NAMES.CASHTAGS] = data;
      }
      if (i === 2) {
        arr[DATASET_NAMES.MENTIONS] = data;
      }
      if (i === 3) {
        arr[DATASET_NAMES.URLS] = data;
      }
    }
    this.num += 1;
    return arr;
  }
  createInfluencers(amount = 5) {
    return [...Array(amount)].map((e, i) => {
      return {
        displayName: `name-${i}`,
        name: `name-${i}`,
        profileImage: AvatarImg,
        following: 400,
        followers: 500,
      };
    });
  }
  createDataset(amount: number) {
    const indexesToChange = [...Array(4)].map((e) => {
      return Math.floor(Math.random() * amount);
    });
    return [...Array(amount + this.num)].map((e, i) => {
      const num = indexesToChange.includes(i)
        ? Math.floor(Math.random() * 1000) + 100
        : i;
      return {
        name: `item-${i + 1}`,
        count: num,
        processed: num - 100,
      };
    });
  }

  createHeaderData(): IHeaderCounterData {
    return {
      title: "Popular Mentions",
      image: SymbolImg,
      name: "Blockchain",
      count: Math.floor(Math.random() * 1000) + 100,
    };
  }

  createTweetLiveData() {
    return [...Array(3)].map((e) => {
      return {
        image: TweetPlaceholderImg,
        title: "CryptoCurrency News",
        author: "CryptoBoomNews",
        text:
          "The original source of the latest news, insight, and commentary about #CryptoCurrency!(Not Investment Advice) Free Nightly Newsletter",
      };
    });
  }
}

export default new DataGenerator();
