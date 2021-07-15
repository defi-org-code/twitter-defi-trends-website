import { useState, useRef } from "react";
import Tooltip from "../../../../../../../components/Tooltip";
import images from "../../../../../../../constans/images";
import useClickOutside from "../../../../../../../hooks/useClickOutside";

const AllTweetsViewCustomMobile = () => {
  const [showToolip, setShowToolip] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  useClickOutside(container, () => setShowToolip(false));

  return (
    <div className="view-selector-custom" ref={container}>
      <button
        onClick={() => setShowToolip(!showToolip)}
        className="view-selector-custom-btn"
      >
        <img src={images.questionMark.img} alt={images.questionMark.alt} />
      </button>
      <Tooltip
        style={{ opacity: showToolip ? 1 : 0 }}
        content="Realtime tweets about DeFi by everyone on Twitter excluding annoying bots"
      />
    </div>
  );
};

export default AllTweetsViewCustomMobile;
