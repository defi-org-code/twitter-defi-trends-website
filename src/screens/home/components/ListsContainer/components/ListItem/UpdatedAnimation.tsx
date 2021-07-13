import React from "react";
import LottieAnimation from "../../../../../../components/LottieAnimation";
import { lottieAnimations } from "../../../../../../constans/index";

const loaders = [...Array(11)];
function UpdatedAnimation() {
  return (
    <div className="list-item-update-animation flex">
      {loaders.map((e, i) => {
        return <LottieAnimation key={i} animation={lottieAnimations.fire} />;
      })}
    </div>
  );
}

export default UpdatedAnimation;
