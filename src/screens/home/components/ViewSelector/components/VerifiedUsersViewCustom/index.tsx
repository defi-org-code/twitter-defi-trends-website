import React, { useContext } from "react";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const VerifiedUsersViewCustom = () => {
  const { isMobile } = useContext(ThemeContext);
  return isMobile ? <Mobile /> : <Desktop />;
};

export default VerifiedUsersViewCustom;
