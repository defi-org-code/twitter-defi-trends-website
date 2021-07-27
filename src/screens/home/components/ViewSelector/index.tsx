import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";

import { IViewOption, VIEW_SELECTOR_OPTIONS } from "../../types";
import Option from "./components/ViewOption";

interface IProps {
  options: IViewOption[];
  handleViewSelectDesktop: (name: VIEW_SELECTOR_OPTIONS, delay: number) => void;
  handleViewSelectMobile: (name: VIEW_SELECTOR_OPTIONS) => void;
}

const ViewSelector = ({
  options,
  handleViewSelectDesktop,
  handleViewSelectMobile,
}: IProps) => {
  const [selected, setSelected] = useState(VIEW_SELECTOR_OPTIONS.ALL_TWEETS);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useContext(ThemeContext);

  const select = (option: IViewOption) => {
    setSelected(option.value);
    if (isMobile) {
      return handleViewSelectMobile(option.value);
    }
    handleViewSelectDesktop(option.value, option.animatiomEndTimeout);
  };

  return (
    <>
      <div className="view-selector flex">
        {options.map((option: IViewOption, index: number) => {
          return (
            <Option
              ref={indicatorRef}
              key={option.value}
              option={option}
              selected={selected}
              select={() => select(option)}
              isFirst={index === 0}
            />
          );
        })}
        <figure className="view-selector-indicator" ref={indicatorRef}></figure>
      </div>
    </>
  );
};

export default ViewSelector;
