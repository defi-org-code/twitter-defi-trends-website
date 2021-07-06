import React, { useEffect, useState, useRef } from "react";

interface IProps {
  content: any;
  image: string;
  alt: string;
  handleClick?: () => void;
}
const Tooltip = ({ content, image, alt, handleClick }: IProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [hideContent, setHideContent] = useState(true);

  const handleShow = () => {
    setHideContent(false);
    setTimeout(() => {
      if (!tooltipRef.current) return;
      tooltipRef.current.style.opacity = "1";
      tooltipRef.current.style.pointerEvents = "all";
    }, 50);
  };
  const handleHide = () => {
    if (!tooltipRef.current) return;
    tooltipRef.current.style.opacity = "0";
    tooltipRef.current.style.pointerEvents = "none";
    setTimeout(() => {
      setHideContent(true);
    }, 200);
  };

  const onClick = () => {
    setHideContent(true);
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <div
      className="tooltip"
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
    >
      {image && (
        <button className="tooltip-btn" onClick={onClick}>
          <img src={image} alt={alt} />
        </button>
      )}
      {!hideContent && (
        <div ref={tooltipRef} className="tooltip-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
