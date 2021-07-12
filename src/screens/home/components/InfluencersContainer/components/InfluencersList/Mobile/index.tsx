/* eslint-disable react-hooks/exhaustive-deps */
import LoadingHandler from "../../../../../../../components/LoadingHandler";
import ErrorHandling from "../../../../../../../components/ErrorHandling";
import InfluencersLoader from "../../InfluencersLoader/index";

import { IUser } from "../../../../../types";
import Influencer from "../../Influencer/index";
import { useState } from "react";

interface IProps {
  users: IUser[];
  error: boolean;
}

const handleList = (arr: IUser[], showAll: boolean) => {
  if (showAll) {
    return arr;
  }
  return arr.slice(0, 4);
};

const InfluencersList = ({ users, error }: IProps) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="influencers-list-mobile">
      <ErrorHandling showError={error} errorText="something went wrong...">
        <LoadingHandler
          isLoading={!error && !users}
          LoadingComponent={<InfluencersLoader />}
        >
          <>
            <div className="influencers-list-mobile-grid flex">
              {users &&
                handleList(users, showAll).map((user: IUser) => {
                  return <Influencer key={user.name} influencer={user} />;
                })}
            </div>
            <button onClick={() => setShowAll((e) => !e)}>
              {showAll ? "Show Less" : "Show More"}
            </button>
          </>
        </LoadingHandler>
      </ErrorHandling>
    </div>
  );
};

export default InfluencersList;
