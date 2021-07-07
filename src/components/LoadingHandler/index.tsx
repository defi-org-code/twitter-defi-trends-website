import React from "react";

interface IProps {
  isLoading: boolean;
  children: any;
  LoadingComponent?: any;
}

const LoadingHandler = ({ isLoading, children, LoadingComponent }: IProps) => {
  return <>{isLoading ? <LoadingComponent /> : children}</>;
};

export default LoadingHandler;
