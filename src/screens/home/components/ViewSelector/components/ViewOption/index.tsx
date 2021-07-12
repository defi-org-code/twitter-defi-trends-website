/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, useContext, useEffect, useRef } from "react";
import useMobile from "../../../../../../hooks/useMobile";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
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
    const { isDarkMode } = useContext(ThemeContext);
    const [isMobile] = useMobile();
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

    const onClick = () => {
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
        <div className="flex" onClick={onClick}>
          <img
            src={isDarkMode ? darkImage : image}
            alt="view select"
            className="view-selector-option-img"
          />
          <p> {isMobile && mobileTitle ? mobileTitle : title}</p>
        </div>
        {SelectorCustomComponent && !isMobile && <SelectorCustomComponent />}
      </section>
    );
  }
);

export default ViewOption;
