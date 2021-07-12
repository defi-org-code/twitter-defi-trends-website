/* eslint-disable react-hooks/exhaustive-deps */
import LoadingHandler from "../../../../../../../components/LoadingHandler";
import ErrorHandling from "../../../../../../../components/ErrorHandling";
import InfluencersLoader from "../../InfluencersLoader/index";
import { IUser } from "../../../../../types";
import Influencer from "../../Influencer/index";

interface IProps {
  users: IUser[];
  error: boolean;
}
const Desktop = ({ users, error }: IProps) => {
  return (
    <div className="influencers-list-dekstop flex">
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

export default Desktop;
