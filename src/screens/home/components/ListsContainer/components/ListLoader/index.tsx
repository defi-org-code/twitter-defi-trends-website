import { useContext, useEffect, useState } from "react";
import LottieAnimation from "../../../../../../components/LottieAnimation";
import { lottieAnimations } from "../../../../../../constans";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
const mobileLoaders = [...Array(3)];
const ListsLoader = () => {
  const [show, setShow] = useState(false);
  const { isMobile } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  return (
    <div className={show ? "list-loader list-loader-active" : "list-loader"}>
      {isMobile ? (
        mobileLoaders.map((e, i) => {
          return (
            <div key={i} className="list-loader-mobile flex">
              <figure className="list-loader-mobile-title loader"></figure>
              <figure className="list-loader-mobile-element loader"></figure>
              <figure className="list-loader-mobile-element loader"></figure>
              <figure className="list-loader-mobile-element loader"></figure>
            </div>
          );
        })
      ) : (
        <LottieAnimation animation={lottieAnimations.placeholderLoading} />
      )}
    </div>
  );
};

export default ListsLoader;
