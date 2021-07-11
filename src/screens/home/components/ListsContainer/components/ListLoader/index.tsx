import { useEffect, useState } from "react";
import LottieAnimation from "../../../../../../components/LottieAnimation";
import { lottieAnimations } from "../../../../../../constans";
const ListsLoader = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  return (
    <div className={show ? "list-loader list-loader-active" : "list-loader"}>
      <LottieAnimation animation={lottieAnimations.placeholderLoading} />
    </div>
  );
};

export default ListsLoader;
