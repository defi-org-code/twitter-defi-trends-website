import { categories } from "../../data";
import useListsData from "../../hooks/useListsData";
import {
  DATASET_NAMES,
  IDatasetElement,
  IDatasets,
  IListCategories,
  IListCategory,
  IViewOption,
  IViewToHide,
} from "../../types";
import ErrorHandling from "../../../../components/ErrorHandling";
import LoadingHandler from "../../../../components/LoadingHandler";
import List from "../List";
import ListsLoader from "./components/ListLoader";
import { JSXElementConstructor, useEffect, useRef } from "react";

interface IProps {
  viewToHide: IViewToHide | null;
  viewOption: IViewOption;
  CustomComponent?: JSXElementConstructor<any>;
}

const getCategory = (
  categories: IListCategories,
  key: DATASET_NAMES,
  datasets: IDatasets
): { dataset: IDatasetElement[]; category: IListCategory } | null => {
  const category = categories[key];
  if (!category) return null;
  const dataset = datasets[key];
  if (!dataset) return null;
  return { dataset, category };
};
const ListsContainer = ({
  viewToHide,
  viewOption,
  CustomComponent,
}: IProps) => {
  const { url, apiIntervalSeconds } = viewOption;
  const [datasets, isError] = useListsData(url, apiIntervalSeconds);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (viewToHide?.view === viewOption.value) {
      container.current?.classList.add("lists-hidden");
    }
  }, [viewToHide]);

  return (
    <div className="lists flex" ref={container}>
      <ErrorHandling showError={isError} errorText="something went wrong...">
        <LoadingHandler
          isLoading={!datasets && !isError}
          LoadingComponent={ListsLoader}
        >
          {CustomComponent && <CustomComponent />}
          {datasets &&
            (Object.keys(datasets) as (keyof typeof datasets)[]).map(
              (key: DATASET_NAMES, index: number) => {
                const result = getCategory(categories, key, datasets);
                if (!result) return null;
                return (
                  <List
                    viewToHide={viewToHide}
                    index={index}
                    key={key}
                    dataset={result.dataset}
                    category={result.category}
                    categoryName={key}
                    viewOption={viewOption}
                  />
                );
              }
            )}
        </LoadingHandler>
      </ErrorHandling>
    </div>
  );
};

export default ListsContainer;
