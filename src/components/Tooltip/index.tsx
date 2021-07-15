import React, { CSSProperties } from "react";

interface IProps {
  content: any;
  style?: CSSProperties;
}
const Tooltip = ({ content, style }: IProps) => {
  return (
    <div className="tooltip" style={style}>
      <p>{content}</p>
    </div>
  );
};

export default Tooltip;
