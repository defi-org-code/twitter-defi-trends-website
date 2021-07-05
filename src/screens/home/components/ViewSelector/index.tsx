import React, { useState } from "react";

import { IViewOption, VIEW_SELECTOR_OPTIONS } from "../../types";
import Option from "./ViewOption";

interface IProps {
  options: IViewOption[];
  handleViewSelect: (name: VIEW_SELECTOR_OPTIONS) => void;
  selected: VIEW_SELECTOR_OPTIONS;
}

const ViewSelector = ({ options, handleViewSelect, selected }: IProps) => {
  return (
    <>
      <div className="home-selection flex">
        {options.map((option: IViewOption) => {
          return (
            <Option
              option={option}
              selected={selected}
              handleClick={() => handleViewSelect(option.value)}
            />
          );
        })}
      </div>
    </>
  );
};

export default ViewSelector;
