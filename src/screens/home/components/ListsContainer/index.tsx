/* eslint-disable react-hooks/exhaustive-deps */
import { categories } from "../../data";
import useListsData from "../../hooks/useListsData";
import { DATASET_TYPES, HIDE_LISTS_DIRECTION, IViewOption } from "../../types";
import ErrorHandling from "../../../../components/ErrorHandling";
import LoadingHandler from "../../../../components/LoadingHandler";
import List from "./components/List";
import ListsLoader from "./components/ListLoader";
import Period from "../Period/index";

interface IProps {
  hideView: boolean;
  hideListsDirection: HIDE_LISTS_DIRECTION;
  viewOption: IViewOption;
}

const ListsContainer = ({
  hideView,
  hideListsDirection,
  viewOption,
}: IProps) => {
  const { url, apiIntervalSeconds, ListCustomComponent } = viewOption;
  const [datasets, isError] = useListsData(url, apiIntervalSeconds);

  const isLoading = !datasets && !isError;
  return (
    <>
      <Period url={viewOption.periodApiUrl} hideView={hideView} />

      <div className="lists flex">
        <ErrorHandling showError={isError} errorText="something went wrong...">
          <LoadingHandler
            isLoading={isLoading}
            LoadingComponent={<ListsLoader />}
          >
            {ListCustomComponent && <ListCustomComponent hideView={hideView} />}
            <div className="lists-grid flex">
              {datasets &&
                (Object.keys(datasets) as (keyof typeof datasets)[]).map(
                  (key: DATASET_TYPES, index: number) => {
                    return (
                      <List
                        hideView={hideView}
                        hideListsDirection={hideListsDirection}
                        index={index}
                        key={key}
                        dataset={datasets[key]}
                        category={categories[key]}
                        categoryName={key}
                        viewOption={viewOption}
                      />
                    );
                  }
                )}
            </div>
          </LoadingHandler>
        </ErrorHandling>
      </div>
    </>
  );
};

export default ListsContainer;
