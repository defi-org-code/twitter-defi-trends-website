import React, { useEffect, useState } from "react";
import SelectionContainer from "../SelectionContainer";
import { categories, GET_TWEETS_API_URL } from "../../constants";
import useListsData from "../../hooks/useListsData";
import { DATASET_NAMES, IListCategory } from "../../types";
import ErrorHandling from "../ErrorHandling";
import LoadingHandler from "../LoadeingHandler";
import useVisibilityChange from "../../hooks/useVisibilityChange";
import List from "../List";
const TweetsContainer = () => {
  const [windowInView] = useVisibilityChange();
  const [datasets, isError, isLoading, setNewEndpointUrl] = useListsData(
    GET_TWEETS_API_URL,
    windowInView
  );

  return (
    <div className="home-tweets">
      <SelectionContainer setNewEndpointUrl={setNewEndpointUrl} />
      <div className="home-tweets-lists flex">
        <ErrorHandling showError={isError} errorText="something went wrong...">
          <LoadingHandler isLoading={!isError && isLoading}>
            {datasets &&
              (Object.keys(datasets) as (keyof typeof datasets)[]).map(
                (key: DATASET_NAMES) => {
                  const category: IListCategory = categories[key];
                  if (!category) return null;
                  const dataset = datasets[key];
                  return (
                    <List key={key} dataset={dataset} category={category} />
                  );
                }
              )}
          </LoadingHandler>
        </ErrorHandling>
      </div>
    </div>
  );
};

export default TweetsContainer;
