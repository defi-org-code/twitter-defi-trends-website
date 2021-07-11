import React from "react";
import { IUser } from "../../../../types";
import { nFormatter } from "../../../../utils/numberUtil";

interface IProps {
  influencer: IUser;
}

function Influencer({ influencer }: IProps) {
  const { profileImage, following, followers, name, displayName } = influencer;
  return (
    <div className="influencer">
      <section className="influencer-top flex">
        <img
          className="influencer-top-avatar"
          src={profileImage}
          alt="influencer avatar"
        />
        <span className="influencer-top-content">
          <h5 className="influencer-name">{name}</h5>
          <p className="influencer-username">{displayName}</p>
        </span>
      </section>
      <section className="influencer-bottom flex">
        <span className="influencer-bottom-left flex">
          <strong className="influencer-following-amount">
            {nFormatter(following)}
          </strong>
          <p className="influencer-following-text">Following</p>
        </span>
        <span className="influencer-bottom-right flex">
          <strong className='className="influencer-followers-text'>
            {nFormatter(followers)}
          </strong>
          <p className='className="influencer-followers-amount'>Followers</p>
        </span>
      </section>
    </div>
  );
}

export default Influencer;
