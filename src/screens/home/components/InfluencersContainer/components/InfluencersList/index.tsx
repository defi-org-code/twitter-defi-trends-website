/* eslint-disable react-hooks/exhaustive-deps */
import LoadingHandler from "../../../../../../components/LoadingHandler";
import ErrorHandling from "../../../../../../components/ErrorHandling";
import InfluencersLoader from "../InfluencersLoader/index";
import useInterval from "../../../../../../hooks/useInterval";
import {
  FETCH_VERIFIED_USERS_INTERVAL,
  GET_ACTIVE_USERS_OF_LIST_API_URL,
} from "../../../../constants";
import { IUser } from "../../../../types";
import Influencer from "../Influencer/index";
import { useEffect } from "react";
import useVisibilityChange from "../../../../../../hooks/useVisibilityChange";
import useFetch from "../../../../../../hooks/useFetch";

const InfluencersList = () => {
  const url = GET_ACTIVE_USERS_OF_LIST_API_URL;

  const [users, fetch, error] = useFetch(url);
  const [clear, set] = useInterval(fetch, FETCH_VERIFIED_USERS_INTERVAL);
  useEffect(() => {
    fetch();
  }, []);

  const getData = () => {
    fetch();
    set();
  };

  useVisibilityChange(getData, clear);

  return (
    <div className="influencers-list flex">
      <ErrorHandling showError={error} errorText="something went wrong...">
        <LoadingHandler
          isLoading={!error && !users}
          LoadingComponent={<InfluencersLoader />}
        >
          <>
            {users &&
              users.map((user: IUser) => {
                return <Influencer key={user.name} influencer={user} />;
              })}
          </>
        </LoadingHandler>
      </ErrorHandling>
    </div>
  );
};

export default InfluencersList;
