import React, { useContext } from "react";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
import { IViewOption } from "../../../../types";

interface IProps {
  option: IViewOption;
  selected: string;
  handleClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const ViewOption = ({ option, selected, handleClick }: IProps) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { title, value, image, CustomComponent, darkImage } = option;
  const className =
    value === selected ? "view-selector view-selector-active" : "view-selector";

  return (
    <section className={className}>
      <div className="flex" onClick={handleClick}>
        <img
          src={isDarkMode ? darkImage : image}
          alt={title}
          className="view-selector-img"
        />
        <p> {title}</p>
      </div>
      {CustomComponent && <CustomComponent />}
    </section>
  );
};

export default ViewOption;
