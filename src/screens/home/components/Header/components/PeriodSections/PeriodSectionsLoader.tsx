import React from "react";

const PeriodSectionsLoader = () => {
  return (
    <div className="header-period-sections-loader">
      <div className="header-period-sections-loader-top">
        <figure className="loader"></figure>
      </div>
      <div className="flex header-period-sections-loader-bottom">
        <figure className="loader"></figure>
        <figure className="loader"></figure>
        <figure className="loader"></figure>
        <figure className="loader"></figure>
      </div>
    </div>
  );
};

export default PeriodSectionsLoader;
