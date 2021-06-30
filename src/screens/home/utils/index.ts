import { IDatasets, IRawTweets } from "../types";

const calculateCount = (processed: any, count: any, lastUpdateTime: Date) => {
  const POLL_INTERVAL = 60;
  const la: number = new Date(lastUpdateTime).getMilliseconds();
  return Math.round(
    processed +
      (count - processed) *
        Math.min(1, (new Date().getTime() - la) / 1000 / POLL_INTERVAL)
  );
};

export const normalizeEntities = (
  entities: IRawTweets,
  limit: number
): IDatasets => {
  return {
    hashtags: entities.hashtags
      .slice(0, limit)

      .map((hashtag: any) => {
        return {
          name: hashtag.name,
          count: calculateCount(
            hashtag.processed,
            hashtag.count,
            hashtag.lastUpdateTime
          ),
        };
      })
      .sort((a: any, b: any) => b.count - a.count),
    cashtags: entities.cashtags
      .slice(0, limit)
      .map((cashtag: any) => {
        return {
          name: cashtag.name,
          count: calculateCount(
            cashtag.processed,
            cashtag.count,
            cashtag.lastUpdateTime
          ),
        };
      })
      .sort((a: any, b: any) => b.count - a.count),
    mentions: entities.mentions
      .slice(0, limit)
      .map((mention: any) => {
        return {
          name: mention.name,
          count: calculateCount(
            mention.processed,
            mention.count,
            mention.lastUpdateTime
          ),
        };
      })
      .sort((a: any, b: any) => b.count - a.count),
    urls: entities.urls
      .slice(0, limit)
      .map((url: any) => {
        return {
          name: url.name,
          count: calculateCount(url.processed, url.count, url.lastUpdateTime),
        };
      })
      .sort((a: any, b: any) => b.count - a.count),
  };
};
