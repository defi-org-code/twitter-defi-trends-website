import LoadingHandler from "../../../../../../../components/LoadingHandler";
import ErrorHandling from "../../../../../../../components/ErrorHandling";
import Loader from "./Loader";
import { IUser, VIEW_SELECTOR_OPTIONS } from "../../../../../types";
import Influencer from "../../Influencer/index";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import useAnalytics from "../../../../../../../hooks/useAnalytics";
import { ANALYTICS_EVENTS } from "../../../../../../../services/analytics/types";

interface IProps {
  users: IUser[];
  error: boolean;
}

const InfluencersList = ({ users, error }: IProps) => {
  const [showAll, setShowAll] = useState(false);
  const { sendEventAndRunAction } = useAnalytics();

  return (
    <div className="influencers-list-mobile">
      <ErrorHandling showError={error} errorText="something went wrong...">
        <LoadingHandler
          isLoading={!error && !users}
          LoadingComponent={<Loader />}
        >
          <>
            <AnimateHeight duration={300} height={showAll ? "auto" : 128}>
              <div className="influencers-list-mobile-grid flex">
                {users &&
                  users.map((user: IUser) => {
                    return <Influencer key={user.name} influencer={user} />;
                  })}
              </div>
            </AnimateHeight>

            <button
              onClick={sendEventAndRunAction.bind(
                null,
                ANALYTICS_EVENTS.MOBILE_VIEW_ALL,
                VIEW_SELECTOR_OPTIONS.VARIFIED_USERS,
                setShowAll.bind(null, (e) => !e)
              )}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </>
        </LoadingHandler>
      </ErrorHandling>
    </div>
  );
};

export default InfluencersList;
