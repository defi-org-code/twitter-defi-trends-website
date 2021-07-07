import React from "react";
import { IInfluencer } from "../../../../types";
import { nFormatter } from "../../../../utils/numberUtil";

interface IProps {
  influencer: IInfluencer;
}

function Influencer({ influencer }: IProps) {
  const { avatar, following, followers, name, username } = influencer;
  return (
    <div className="influencer">
      <section className="influencer-top flex">
        <img
          className="influencer-avatar"
          src={avatar}
          alt="influencer avatar"
        />
        <span>
          <h5 className="influencer-name">{name}</h5>
          <p className="influencer-username">{username}</p>
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
