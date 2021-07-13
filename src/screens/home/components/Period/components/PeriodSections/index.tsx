import { IPeriodData } from "../../../../types/index";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useContext } from "react";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";

interface IProps {
  data: IPeriodData[];
  title: string;
}

const PeriodSections = (props: IProps) => {
  const { isMobile } = useContext(ThemeContext);

  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />;
};

export default PeriodSections;
