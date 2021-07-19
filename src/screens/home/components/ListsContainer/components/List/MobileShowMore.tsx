import { useContext } from "react";
import useAnalytics from "../../../../../../hooks/useAnalytics";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
import { DATASET_TYPES } from "../../../../types";

interface IProps {
  showFullList: boolean;
  setshowFullList: (val: boolean) => void;
  categoryName: DATASET_TYPES;
}

function MobileShowMore({
  showFullList,
  setshowFullList,
  categoryName,
}: IProps) {
  const { tapOnViewAll } = useAnalytics();
  const { isMobile } = useContext(ThemeContext);
  const clickOnShowFullList = () => {
    tapOnViewAll(categoryName);
    setshowFullList(true);
  };
  if (!isMobile) {
    return null;
  }
  return showFullList ? (
    <button
      className="list-mobile-toggle"
      onClick={() => setshowFullList(false)}
    >
      Show less
    </button>
  ) : (
    <button className="list-mobile-toggle" onClick={clickOnShowFullList}>
      Show more
    </button>
  );
}

export default MobileShowMore;
