import React from "react";
import { JsxElement } from "typescript";
import "./style.scss";

interface IProps {
  isLoading: boolean;
  children: any;
  LoadingComponent?: any;
}

const LoadingHandler = ({ isLoading, children, LoadingComponent }: IProps) => {
  return <>{isLoading ? <LoadingComponent /> : children}</>;
};

export default LoadingHandler;
