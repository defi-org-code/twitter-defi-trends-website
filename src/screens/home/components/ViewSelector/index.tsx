import React, { useRef, useState } from "react";

import { IViewOption, VIEW_SELECTOR_OPTIONS } from "../../types";
import Option from "./components/ViewOption";

interface IProps {
  options: IViewOption[];
  handleViewSelect: (name: VIEW_SELECTOR_OPTIONS) => void;
}

const ViewSelector = ({ options, handleViewSelect }: IProps) => {
  const [selected, setSelected] = useState(VIEW_SELECTOR_OPTIONS.ALL_TWEETS);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const select = (option: VIEW_SELECTOR_OPTIONS) => {
    setSelected(option);
    handleViewSelect(option);
  };

  return (
    <>
      <div className="home-selection flex">
        {options.map((option: IViewOption, index: number) => {
          return (
            <Option
              ref={indicatorRef}
              key={option.value}
              option={option}
              selected={selected}
              select={() => select(option.value)}
              isFirst={index === 0}
            />
          );
        })}
        <figure
          className="home-selection-indicator"
          ref={indicatorRef}
        ></figure>
      </div>
    </>
  );
};

export default ViewSelector;
