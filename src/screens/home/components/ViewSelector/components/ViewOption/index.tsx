/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import useAnalytics from "../../../../../../hooks/useAnalytics";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
import { ANALYTICS_EVENTS } from "../../../../../../services/analytics/types";
import { IViewOption } from "../../../../types";

interface IProps {
  option: IViewOption;
  selected: string;
  select: () => void;
}

const ViewOption = ({ option, selected, select }: IProps) => {
  const { isDarkMode, isMobile } = useContext(ThemeContext);
  const { sendEventAndRunAction } = useAnalytics();
  const {
    title,
    value,
    image,
    SelectorCustomComponent,
    darkImage,
    mobileTitle,
  } = option;
  const className =
    value === selected
      ? "view-selector-option view-selector-option-active"
      : "view-selector-option";

  const handleSelectOption = () => {
    select();
  };

  return (
    <section className={className}>
      <div
        className="flex"
        onClick={sendEventAndRunAction.bind(
          null,
          ANALYTICS_EVENTS.SWITCH_TAB,
          option.value,
          handleSelectOption
        )}
      >
        <img
          src={isDarkMode ? darkImage : image}
          alt="view select"
          className="view-selector-option-img"
        />
        <p className="view-selector-option-name">
          {isMobile && mobileTitle ? mobileTitle : title}
        </p>
      </div>
      {SelectorCustomComponent && <SelectorCustomComponent />}
    </section>
  );
};

export default ViewOption;
