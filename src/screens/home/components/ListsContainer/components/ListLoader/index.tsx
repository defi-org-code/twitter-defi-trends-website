import React, { useEffect, useState } from "react";
import { LISTS_AMOUNT } from "../../../../constants";
import LottieAnimation from "../../../../../../components/LottieAnimation";
import { lottieAnimations } from "../../../../../../constans";
const ListsLoader = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);
  const lists = [...Array(LISTS_AMOUNT)];
  const items = [...Array(20)];
  return (
    <div className={show ? "list-loader list-loader-active" : "list-loader"}>
      {/* {lists.map((e, i) => {
        return (
          <div key={`${i}`} className="list-loader-section">
            <section className="list-loader-section-title flex">
              <figure className="list-loader-section-title-left loader"></figure>
              <figure className="list-loader-section-title-right loader"></figure>
            </section>
            <ul>
              {items.map((e, i) => {
                return (
                  <li
                    key={`${i}`}
                    className="list-loader-section-element loader"
                  ></li>
                );
              })}
            </ul>
          </div>
        );
      })} */}
      <LottieAnimation animation={lottieAnimations.placeholderLoading} />
    </div>
  );
};

export default ListsLoader;
