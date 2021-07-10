import useFetch from "../../../../hooks/useFetch";
import useInterval from "../../../../hooks/useInterval";
import useVisibilityChange from "../../../../hooks/useVisibilityChange";
import {FETCH_VERIFIED_USERS_INTERVAL, GET_ACTIVE_USERS_OF_LIST_API_URL,} from "../../constants";
import {IUser} from "../../types";
import Influencer from "./components/Influencer";
import JoinBtn from "./JoinBtn";
import MostActive from "./MostActive";

const InfluencersContainer = () => {
  // change this api to the get users api
  const url = GET_ACTIVE_USERS_OF_LIST_API_URL;

  // this hooks fetches data on load
  const [data, error, _loading, fetchData] = useFetch(url, true);
  // this hooks runs the fetch data every FETCH_VERIFIED_USERS_INTERVAL seconds
  const [clear, set] = useInterval(fetchData, FETCH_VERIFIED_USERS_INTERVAL);

  const getData = () => {
    fetchData();
    set();
  };
  // this hook runs the getData every time user is back to tab and clear when user is not on tab
  // clear is clear interval
  useVisibilityChange(getData, clear);

  return (
    <div className="influencers flex">
      <section className="influencers-bg"></section>
      <MostActive />
      <div className="influencers-flex flex">
          {
              data &&
              data.map((influencer: IUser) => {
                  return <Influencer key={influencer.name} influencer={influencer}/>;
              })
          }
      </div>
      <JoinBtn />
    </div>
  );
};

export default InfluencersContainer;
