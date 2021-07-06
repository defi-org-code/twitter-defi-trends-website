import React, { useState } from "react";

import { IViewOption, VIEW_SELECTOR_OPTIONS } from "../../types";
import Option from "./components/ViewOption";

interface IProps {
  options: IViewOption[];
  handleViewSelect: (name: VIEW_SELECTOR_OPTIONS) => void;
  selected: VIEW_SELECTOR_OPTIONS;
}

const ViewSelector = ({ options, handleViewSelect, selected }: IProps) => {
  const select = (
    e: React.MouseEvent<HTMLElement>,
    option: VIEW_SELECTOR_OPTIONS
  ) => {
    e.stopPropagation();
    handleViewSelect(option);
  };
  return (
    <>
      <div className="home-selection flex">
        {options.map((option: IViewOption) => {
          return (
            <Option
              key={option.value}
              option={option}
              selected={selected}
              handleClick={(e: React.MouseEvent<HTMLElement>) =>
                select(e, option.value)
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default ViewSelector;
