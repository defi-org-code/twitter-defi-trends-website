import React from "react";
import DefaultLoader from "./DefaultLoader";

interface IProps {
  isLoading: boolean;
  children: any;
  LoadingComponent?: any;
}

const LoadingHandler = ({
  isLoading,
  children,
  LoadingComponent = <DefaultLoader />,
}: IProps) => {
  return <>{isLoading ? LoadingComponent : children}</>;
};

export default LoadingHandler;
