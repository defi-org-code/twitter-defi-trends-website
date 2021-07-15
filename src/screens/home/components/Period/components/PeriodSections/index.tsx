import { IPeriodData } from "../../../../types/index";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useContext } from "react";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";

interface IProps {
  data: IPeriodData[];
  title: string;
  toggle?: () => void;
}

const PeriodSections = ({ data, title, toggle }: IProps) => {
  const { isMobile } = useContext(ThemeContext);

  return isMobile ? (
    <Mobile data={data} title={title} toggle={toggle} />
  ) : (
    <Desktop data={data} title={title} />
  );
};

export default PeriodSections;
