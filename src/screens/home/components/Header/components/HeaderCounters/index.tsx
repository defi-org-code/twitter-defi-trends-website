import { ITopTweets } from "../../../../types/index";
import HeaderCounter from "./HeaderCounter";
interface IProps {
  data: ITopTweets[];
  title: string;
}

const HeaderCounters = ({ data, title }: IProps) => {
  return (
    <div className="home-header-counters">
      <h5 className="home-header-counters-title">{title}</h5>
      <div className="flex">
        {data &&
          data.map((element: ITopTweets) => {
            return <HeaderCounter key={element.name} element={element} />;
          })}
      </div>
    </div>
  );
};

export default HeaderCounters;
