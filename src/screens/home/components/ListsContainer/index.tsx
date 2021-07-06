import React from "react";
import { categories } from "../../data";
import useListsData from "../../hooks/useListsData";
import { DATASET_NAMES, IViewOption, IViewToHide } from "../../types";
import ErrorHandling from "../ErrorHandling";
import LoadingHandler from "../LoadeingHandler";
import List from "../List";
import ListsLoader from "./components/ListLoader";

interface IProps {
  url: string;
  viewToHide: IViewToHide | null;
  viewOption: IViewOption;
}
const ListsContainer = ({ url, viewToHide, viewOption }: IProps) => {
  const [datasets, isError, isLoading] = useListsData(url);

  return (
    <div className="home-tweets-lists flex">
      <ErrorHandling showError={isError} errorText="something went wrong...">
        <LoadingHandler
          isLoading={!datasets && !isError}
          LoadingComponent={ListsLoader}
        >
          {datasets &&
            (Object.keys(datasets) as (keyof typeof datasets)[]).map(
              (key: DATASET_NAMES, index: number) => {
                const category = categories[key];
                if (!category) return null;
                const dataset = datasets[key];
                return (
                  <List
                    viewToHide={viewToHide}
                    index={index}
                    key={key}
                    dataset={dataset}
                    category={category}
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
