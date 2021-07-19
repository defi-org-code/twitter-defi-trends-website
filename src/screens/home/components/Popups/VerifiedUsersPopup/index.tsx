import React from "react";
import images from "../../../../../constans/images";
import Button from "../../../../../components/Button";
import {
  DEFI_ORG_URL,
  TWEET_TEXT,
  TWITTER_DEFI_ORG_HANDLE,
} from "../../../constants";
import useAnalytics from "../../../../../hooks/useAnalytics";
import { ANALYTICS_EVENTS } from "../../../../../services/analytics/types";

interface IProps {
  onClick: () => void;
}
const VerifiedUsersPopup = ({ onClick }: IProps) => {
  const { sendEventAndRunAction } = useAnalytics();
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClick();
  };
  return (
    <div className="verified-users-popup">
      <img src={images.greenTwitter.img} alt={images.greenTwitter.alt} />
      <h4>Do you think you should be here?</h4>
      <p>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            TWEET_TEXT
          )}`}
          target="_blank"
          rel="noreferrer"
          onClick={sendEventAndRunAction.bind(
            null,
            ANALYTICS_EVENTS.TAP_ON_WANT_TO_BE_MENTIONED_TWEET,
            undefined,
            undefined
          )}
        >
          Tweet
        </a>
        about <span>{DEFI_ORG_URL}</span> and mention{" "}
        <span>{TWITTER_DEFI_ORG_HANDLE}</span> and we will consider adding you
        to the verified list of users
      </p>
      <Button text="Close" onClick={handleClick} />
    </div>
  );
};

export default VerifiedUsersPopup;
