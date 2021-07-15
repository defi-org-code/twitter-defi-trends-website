import Tooltip from "../../../../../../../components/Tooltip";
import images from "../../../../../../../constans/images";

const AllTweetsViewCustom = () => {
  return (
    <div className="view-selector-custom view-selector-custom-desktop">
      <button className="view-selector-custom-btn">
        <img src={images.questionMark.img} alt={images.questionMark.alt} />
      </button>
      <Tooltip content="Realtime tweets about DeFi by everyone on Twitter excluding annoying bots" />
    </div>
  );
};

export default AllTweetsViewCustom;
