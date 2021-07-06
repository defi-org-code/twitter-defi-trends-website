import React, { JSXElementConstructor, useEffect, useRef } from "react";

interface IProps {
  ContentCoponent?: JSXElementConstructor<any>;
  close: () => void;
  show: boolean;
}
const Popup = ({ ContentCoponent, close, show }: IProps) => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (show) {
      handleShow();
    }
  }, [show]);

  const handleShow = () => {
    setTimeout(() => {
      if (container.current) {
        container.current.style.opacity = "1";
        container.current.style.pointerEvents = "all";
      }
    }, 10);
  };

  const handleHide = () => {
    if (container.current) {
      container.current.style.opacity = "0";
      container.current.style.pointerEvents = "none";
    }
    setTimeout(() => {
      close();
    }, 200);
  };

  return show ? (
    <div className={"popup"} ref={container}>
      <section className="popup-overlay" onClick={handleHide} />
      <div className="popup-content">
        {ContentCoponent && <ContentCoponent onClick={handleHide} />}
      </div>
    </div>
  ) : null;
};

export default Popup;
