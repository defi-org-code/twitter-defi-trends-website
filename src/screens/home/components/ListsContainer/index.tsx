import React from "react";
import { categories } from "../../constants";
import useListsData from "../../hooks/useListsData";
import { DATASET_NAMES, IListCategory } from "../../types";
import ErrorHandling from "../ErrorHandling";
import LoadingHandler from "../LoadeingHandler";
import List from "../List";
const ListsContainer = () => {
  const [datasets, isError, isLoading] = useListsData();

  return (
    <div className="home-lists">
      <ErrorHandling showError={isError} errorText="something went wrong...">
        <LoadingHandler isLoading={!isError && isLoading}>
          {datasets &&
            (Object.keys(datasets) as (keyof typeof datasets)[]).map(
              (key: DATASET_NAMES) => {
                const category: IListCategory = categories[key];
                if (!category) return null;
                const dataset = datasets[key];
                return <List key={key} dataset={dataset} category={category} />;
              }
            )}
        </LoadingHandler>
      </ErrorHandling>
    </div>
  );
};

export default ListsContainer;
