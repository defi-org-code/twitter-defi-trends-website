import React from "react";
import { JsxElement } from "typescript";
import "./style.scss";

interface IProps {
  isLoading: boolean;
  children: any;
}

const LoadingHandler = ({ isLoading, children }: IProps) => {
  return (
    <>
      <div
        className={isLoading ? "app-loader app-loader-active" : "app-loader"}
      >
        Loading...
      </div>
      {children}
    </>
  );
};

export default LoadingHandler;
