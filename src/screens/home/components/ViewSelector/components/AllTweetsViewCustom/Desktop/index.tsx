import Tooltip from "../../../../../../../components/Tooltip";
import images from "../../../../../../../constans/images";

const AllTweetsViewCustom = () => {
  return (
    <div className="view-selector-custom view-selector-custom-desktop">
      <Tooltip
        content="Realtime tweets about DeFi by everyone on Twitter excluding annoying bots"
        className="view-selector-custom-btn"
        btnContent={
          <img src={images.questionMark.img} alt={images.questionMark.alt} />
        }
      />
    </div>
  );
};

export default AllTweetsViewCustom;
