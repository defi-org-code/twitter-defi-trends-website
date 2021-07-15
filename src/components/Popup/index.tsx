import { JSXElementConstructor, useEffect, useRef } from "react";
import { sleep } from "../../utils";

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

  const handleShow = async () => {
    await sleep(10);
    if (container.current) {
      container.current.style.opacity = "1";
      container.current.style.pointerEvents = "all";
    }
  };

  const handleHide = async () => {
    if (container.current) {
      container.current.style.opacity = "0";
      container.current.style.pointerEvents = "none";
    }
    await sleep(200);
    close();
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
