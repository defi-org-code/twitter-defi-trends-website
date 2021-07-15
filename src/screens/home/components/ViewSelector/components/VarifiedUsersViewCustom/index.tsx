import React, { useContext } from "react";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const VarifiedUsersViewCustom = () => {
  const { isMobile } = useContext(ThemeContext);
  return isMobile ? <Mobile /> : <Desktop />;
};

export default VarifiedUsersViewCustom;
