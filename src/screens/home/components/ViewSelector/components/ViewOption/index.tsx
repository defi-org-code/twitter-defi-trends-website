/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef, useContext, useEffect, useRef } from "react";
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
    const { title, value, image, SelectorCustomComponent, darkImage } = option;
    const className =
      value === selected
        ? "view-selector view-selector-active"
        : "view-selector";

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
            alt={title}
            className="view-selector-img"
          />
          <p> {title}</p>
        </div>
        {SelectorCustomComponent && <SelectorCustomComponent />}
      </section>
    );
  }
);

export default ViewOption;
