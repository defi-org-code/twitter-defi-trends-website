import { ITopTweets } from "../../../../types/index";
import PeriodSection from "./PeriodSection";
import LoadingHandler from "../../../../../../components/LoadingHandler";
import PeriodSectionsLoader from "./PeriodSectionsLoader";
interface IProps {
  data: ITopTweets[];
  title: string;
}

const PeriodSections = ({ data, title }: IProps) => {
  return (
    <LoadingHandler isLoading={!data} LoadingComponent={PeriodSectionsLoader}>
      <div className="header-period-sections">
        <h5 className="header-period-sections-title">{title}</h5>
        <div className="flex">
          {data &&
            data.map((element: ITopTweets) => {
              return <PeriodSection key={element.name} element={element} />;
            })}
        </div>
      </div>
    </LoadingHandler>
  );
};

export default PeriodSections;
