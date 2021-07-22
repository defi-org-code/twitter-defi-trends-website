/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, useContext, useEffect, useRef } from "react";
import useAnalytics from "../../../../../../hooks/useAnalytics";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
import { ANALYTICS_EVENTS } from "../../../../../../services/analytics/types";
import { IViewOption } from "../../../../types";

interface IProps {
  option: IViewOption;
  selected: string;
  select: () => void;
  isFirst: boolean;
}

const ViewOption = forwardRef(
  ({ option, selected, select, isFirst }: IProps, indicatorRef: any) => {
    const ref = useRef<any>(0);
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

    useEffect(() => {
      if (isFirst) {
        handleIndicator();
      }
    }, []);

    const handleSelectOption = () => {
      handleIndicator();
      select();
    };

    const handleIndicator = () => {
      const left = ref.current.offsetLeft;
      const width = ref.current.getBoundingClientRect().width;
      indicatorRef.current.style.left = `${left}px`;
      indicatorRef.current.style.width = `${width}px`;
    };

    return (
      <section className={className} ref={ref}>
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
  }
);

export default ViewOption;
