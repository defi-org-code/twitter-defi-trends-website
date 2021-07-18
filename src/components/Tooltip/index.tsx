import React, { CSSProperties } from "react";

interface IProps {
  content: any;
  style?: CSSProperties;
  customClassName?: string;
}
const Tooltip = ({ content, style, customClassName }: IProps) => {
  return (
    <div
      className={customClassName ? `${customClassName} tooltip` : "tooltip"}
      style={style}
    >
      <p>{content}</p>
    </div>
  );
};

export default Tooltip;
