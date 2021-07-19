import { useContext } from "react";
import useAnalytics from "../../../../../../hooks/useAnalytics";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
import { ANALYTICS_EVENTS } from "../../../../../../services/analytics/types";
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
  const { sendEventAndRunAction } = useAnalytics();
  const { isMobile } = useContext(ThemeContext);

  const show = () => {
    setshowFullList(true);
  };

  const hide = () => {
    setshowFullList(false);
  };

  if (!isMobile) {
    return null;
  }
  return showFullList ? (
    <button className="list-mobile-toggle" onClick={hide}>
      Show less
    </button>
  ) : (
    <button
      className="list-mobile-toggle"
      onClick={sendEventAndRunAction.bind(
        null,
        ANALYTICS_EVENTS.MOBILE_VIEW_ALL,
        categoryName,
        show
      )}
    >
      Show more
    </button>
  );
}

export default MobileShowMore;
