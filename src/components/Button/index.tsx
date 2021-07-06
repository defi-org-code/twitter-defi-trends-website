import React, { CSSProperties } from "react";

interface IProps {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  text: string;
  style?: CSSProperties;
  customClassName?: string;
}

const Button = ({ onClick, text, style, customClassName }: IProps) => {
  const className = customClassName ? `button ${customClassName}` : "button";
  return (
    <button
      style={style}
      className={className}
      onClick={(e: React.MouseEvent<HTMLElement>) => onClick(e)}
    >
      {text}
    </button>
  );
};

export default Button;
