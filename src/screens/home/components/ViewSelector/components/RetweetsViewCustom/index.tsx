import React, { useContext } from "react";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const RetweetsViewCustom = () => {
  const { isMobile } = useContext(ThemeContext);
  return isMobile ? <Mobile /> : <Desktop />;
};

export default RetweetsViewCustom;
