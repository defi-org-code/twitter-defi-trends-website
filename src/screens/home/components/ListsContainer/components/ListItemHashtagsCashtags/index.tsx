import { lottieAnimations } from "../../../../../../constans";
import useTweetsData from "../../../../hooks/useTweetsData";
import { IDatasetElement, ITweet } from "../../../../types";
import LiveAnimation from "../LiveAnimation";
import Tweet from "./Tweet";
import LottieAnimation from "../../../../../../components/LottieAnimation";
import ErrorHandling from "../../../../../../components/ErrorHandling";
import LoadingHandler from "../../../../../../components/LoadingHandler";
interface IProps {
  item: IDatasetElement;
  symbol: string;
}

const ListItemHashtagsCashtags = ({ item, symbol }: IProps) => {
  const { name } = item;
  const [tweets, loading, error] = useTweetsData(name);

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
            LoadingComponent={
              <LottieAnimation
                customClassName="list-item-loader-lottie"
                animation={lottieAnimations.loadingSmall}
              />
            }
          >
            <ul className="list-item-hashtags-list">
              {tweets.map((tweet: ITweet, index: number) => {
                return (
                  <Tweet key={`${tweet.id}`} tweet={tweet} index={index} />
                );
              })}
            </ul>
          </LoadingHandler>
        </>
      </ErrorHandling>
    </div>
  );
};

export default ListItemHashtagsCashtags;
