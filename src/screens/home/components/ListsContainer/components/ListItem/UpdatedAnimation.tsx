import React from "react";
import LottieAnimation from "../../../../../../components/LottieAnimation";
import { lottieAnimations } from "../../../../../../constans";

const loaders = [...Array(1)];
function UpdatedAnimation() {
  return (
    <div className="list-item-update-animation flex">
      {loaders.map((e, i) => {
        return <LottieAnimation key={i} animation={lottieAnimations.fire} subframe={true} />;
      })}
    </div>
  );
}

export default UpdatedAnimation;
