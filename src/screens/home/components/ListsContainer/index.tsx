import React, { useEffect } from "react";
import { categories } from "../../constants";
import useListsData from "../../hooks/useListsData";
import { DATASET_NAMES, VIEW_SELECTOR_OPTIONS } from "../../types";
import ErrorHandling from "../ErrorHandling";
import LoadingHandler from "../LoadeingHandler";
import List from "../List";
import ListsLoader from "./components/ListLoader";

interface IProps {
  url: string;
  hide: boolean;
}
const ListsContainer = ({ url, hide }: IProps) => {
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
                    hide={hide}
                    index={index}
                    key={key}
                    dataset={dataset}
                    category={category}
                    categoryName={key}
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
