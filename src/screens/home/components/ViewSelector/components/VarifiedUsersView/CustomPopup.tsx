import React from "react";
import images from "../../../../../../constans/images";
import Button from "../../../../../../components/Button";

interface IProps {
  onClick: () => void;
}
const CustomPopup = ({ onClick }: IProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <div className="view-selector-varified-users-popup">
      <img src={images.greenTwitter.img} alt={images.greenTwitter.alt} />
      <h4>Do you think you should be here?</h4>
      <p>
        Tweet about
        <a href="https://defi.org/hot" target="_blank" rel="noreferrer">
          https://defi.org/hot
        </a>
        and mention @defi_org and we will consider adding you to the verified
        list of users
      </p>
      <Button text="Close" onClick={handleClick} />
    </div>
  );
};

export default CustomPopup;
