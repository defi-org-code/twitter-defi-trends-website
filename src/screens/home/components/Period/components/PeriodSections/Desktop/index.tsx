import { IPeriodData } from "../../../../../types/index";
import PeriodSection from "../../PeriodSection";
import LoadingHandler from "../../../../../../../components/LoadingHandler";
import PeriodSectionsLoader from "../../PeriodLoader/PeriodLoaderDesktop";
interface IProps {
  data: IPeriodData[];
  title: string;
}

const PeriodSectionsDesktop = ({ data, title }: IProps) => {
  return (
    <LoadingHandler
      isLoading={!data}
      LoadingComponent={<PeriodSectionsLoader />}
    >
      <div className="period-sections-desktop">
        <h5 className="period-sections-desktop-title">{title}</h5>
        <div className="flex period-sections-desktop-list">
          {data &&
            data.map((element: IPeriodData) => {
              return <PeriodSection key={element.name} element={element} />;
            })}
        </div>
      </div>
    </LoadingHandler>
  );
};

export default PeriodSectionsDesktop;
