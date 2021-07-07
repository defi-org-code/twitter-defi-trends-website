import React from "react";

interface IProps {
  content: any;
}
const Tooltip = ({ content }: IProps) => {
  return (
    <div className="tooltip">
      <p>{content}</p>
    </div>
  );
};

export default Tooltip;
