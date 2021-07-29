import { IPeriodData } from "../../../../../types/index";
import PeriodSection from "../../PeriodSection";
import LoadingHandler from "../../../../../../../components/LoadingHandler";
import PeriodSectionsLoader from "../../PeriodLoader/PeriodLoaderDesktop";
interface IProps {
  data: IPeriodData[];
  title: string;
  hideView: boolean;
}

const PeriodSectionsDesktop = ({ data, title, hideView }: IProps) => {
  return (
    <LoadingHandler
      isLoading={!data || hideView}
      LoadingComponent={<PeriodSectionsLoader />}
    >
      <div className="period-sections-desktop">
        <h5 className="period-sections-desktop-title">{title}</h5>
        <div className="flex period-sections-desktop-list">
          {data &&
            data.map((element: IPeriodData, index: number) => {
              return <PeriodSection key={index} element={element} />;
            })}
        </div>
      </div>
    </LoadingHandler>
  );
};

export default PeriodSectionsDesktop;
