import React from "react";
import { LISTS_AMOUNT } from "../../../../constants";

const ListsLoader = () => {
  const lists = [...Array(LISTS_AMOUNT)];
  const items = [...Array(20)];
  return (
    <div className="list-loader">
      {lists.map((e) => {
        return (
          <div className="list-loader-section">
            <section className="list-loader-section-title flex">
              <figure className="list-loader-section-title-left loader"></figure>
              <figure className="list-loader-section-title-right loader"></figure>
            </section>
            <ul>
              {items.map((e) => {
                return <li className="list-loader-section-element loader"></li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ListsLoader;
