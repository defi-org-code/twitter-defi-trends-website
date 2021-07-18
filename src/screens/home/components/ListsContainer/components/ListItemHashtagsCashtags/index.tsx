import useTweetsData from "../../../../hooks/useTweetsData";
import { IDatasetElement, ITweet } from "../../../../types";
import LiveAnimation from "../LiveAnimation";
import Tweet from "./Tweet";
import ListItemLoader from "../ListItemLoader";
import ErrorHandling from "../../../../../../components/ErrorHandling";
import LoadingHandler from "../../../../../../components/LoadingHandler";
import "react-virtualized/styles.css";

import { useRef } from "react";
interface IProps {
  item: IDatasetElement;
  symbol: string;
}

const ListItemHashtagsCashtags = ({ item, symbol }: IProps) => {
  const { name } = item;
  const container = useRef<any>(null);

  const [tweets, loading, error] = useTweetsData(
    name,
    symbol,
    container.current
  );
  return (
    <div className="list-item-hashtags">
      <ErrorHandling showError={error} errorText="Loading error...">
        <>
          <section className="list-item-hashtags-top flex">
            <p>Live tweets</p>
            <LiveAnimation />
          </section>
          <LoadingHandler
            isLoading={!error && loading}
            LoadingComponent={<ListItemLoader />}
          >
            <div className="list-item-hashtags-list" ref={container}>
              {tweets.map((tweet: ITweet) => {
                return (
                  <Tweet
                    key={tweet.id}
                    tweet={tweet}
                    categoryTitle={`${symbol}${name}`}
                  />
                );
              })}
            </div>
          </LoadingHandler>
        </>
      </ErrorHandling>
    </div>
  );
};

export default ListItemHashtagsCashtags;
