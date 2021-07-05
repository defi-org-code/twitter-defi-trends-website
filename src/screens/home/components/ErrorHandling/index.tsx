import React from "react";
interface IProps {
  showError: boolean;
  children: any;
  errorText: string;
}

const ErrorHandling = ({ showError, children, errorText }: IProps) => {
  return showError ? (
    <div className="error-handling">
      <p>{errorText}</p>
    </div>
  ) : (
    children
  );
};

export default ErrorHandling;
