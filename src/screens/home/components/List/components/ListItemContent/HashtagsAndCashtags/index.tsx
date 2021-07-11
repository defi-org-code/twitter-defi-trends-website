import { lottieAnimations } from "../../../../../../../constans";
import useTweetsData from "../../../../../hooks/useTweetsData";
import { IDatasetElement } from "../../../../../types";
import LiveAnimation from "../../LiveAnimation";
import HashtagTweet from "./Tweet";
import LottieAnimation from "../../../../../../../components/LottieAnimation";
import ErrorHandling from "../../../../../../../components/ErrorHandling";
import LoadingHandler from "../../../../../../../components/LoadingHandler";
interface IProps {
  item: IDatasetElement;
  symbol: string;
}

const Hashtags = ({ item, symbol }: IProps) => {
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
              <LottieAnimation animation={lottieAnimations.loadingSmall} />
            }
          >
            <ul className="list-item-hashtags-list">
              {tweets.map((tweet: any, index: number) => {
                return <HashtagTweet key={`${index}`} tweet={tweet} />;
              })}
            </ul>
          </LoadingHandler>
        </>
      </ErrorHandling>
    </div>
  );
};

export default Hashtags;
