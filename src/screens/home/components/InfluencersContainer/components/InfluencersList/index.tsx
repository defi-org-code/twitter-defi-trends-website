/* eslint-disable react-hooks/exhaustive-deps */
import useInterval from "../../../../../../hooks/useInterval";
import { FETCH_VERIFIED_USERS_INTERVAL } from "../../../../constants";
import { IUser } from "../../../../types";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { useContext, useEffect } from "react";
import useVisibilityChange from "../../../../../../hooks/useVisibilityChange";
import useFetch from "../../../../../../hooks/useFetch";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";

declare const process: {
  env: {
    REACT_APP_ACTIVE_USERS_API: string;
  };
};

const InfluencersList = () => {
  const apiUrl = process.env.REACT_APP_ACTIVE_USERS_API;
  const { isMobile } = useContext(ThemeContext);
  const [users, fetch, error] = useFetch<IUser[]>(apiUrl);
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
