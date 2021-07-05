import React from "react";
import { IViewOption } from "../../types";

interface IProps {
  option: IViewOption;
  selected: string;
  handleClick: () => void;
}

const ViewOption = ({ option, selected, handleClick }: IProps) => {
  const { title, value, image } = option;
  return (
    <section
      className={
        value === selected
          ? "home-selection-selector home-selection-selector-active"
          : "home-selection-selector"
      }
      onClick={handleClick}
    >
      <img src={image} alt={title} />
      <p> {title}</p>
    </section>
  );
};

export default ViewOption;
