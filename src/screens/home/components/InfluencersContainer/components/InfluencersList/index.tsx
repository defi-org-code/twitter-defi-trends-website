/* eslint-disable react-hooks/exhaustive-deps */
import useInterval from "../../../../../../hooks/useInterval";
import {
  FETCH_VERIFIED_USERS_INTERVAL,
  GET_ACTIVE_USERS_OF_LIST_API_URL,
} from "../../../../constants";
import { IUser } from "../../../../types";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { useEffect } from "react";
import useVisibilityChange from "../../../../../../hooks/useVisibilityChange";
import useFetch from "../../../../../../hooks/useFetch";
import useMobile from "../../../../../../hooks/useMobile";

const InfluencersList = () => {
  const url = GET_ACTIVE_USERS_OF_LIST_API_URL;
  const [isMobile] = useMobile();
  const [users, fetch, error] = useFetch<IUser[]>(url);
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
      {isMobile ? (
        <Mobile users={users} error={error} />
      ) : (
        <Desktop users={users} error={error} />
      )}
    </div>
  );
};

export default InfluencersList;
