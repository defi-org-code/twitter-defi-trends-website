import React from "react";
import images from "../../../../../constans/images";
import Button from "../../../../../components/Button";
import { DEFI_ORG_URL, TWEET_TEXT } from "../../../constants";

interface IProps {
  onClick: () => void;
}
const VarifiedUsersPopup = ({ onClick }: IProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <div className="varified-users-popup">
      <img src={images.greenTwitter.img} alt={images.greenTwitter.alt} />
      <h4>Do you think you should be here?</h4>
      <p>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            TWEET_TEXT
          )}`}
          target="_blank"
          rel="noreferrer"
        >
          Tweet
        </a>
        about
        <a href={DEFI_ORG_URL} target="_blank" rel="noreferrer">
          https://defi.org/hot
        </a>
        and mention <span>@defi_org</span> and we will consider adding you to
        the verified list of users
      </p>
      <Button text="Close" onClick={handleClick} />
    </div>
  );
};

export default VarifiedUsersPopup;
