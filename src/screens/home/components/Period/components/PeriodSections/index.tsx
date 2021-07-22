import { IPeriodData, PERIODS } from "../../../../types/index";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useContext } from "react";
import { ThemeContext } from "../../../../../../providers/ThemeProvider";

interface IProps {
  data: IPeriodData[];
  title: string;
  selectPeriod?: (value: PERIODS) => void;
  menuValue?: PERIODS;
  menuText?: string;
}

const PeriodSections = ({
  data,
  title,
  selectPeriod,
  menuValue,
  menuText,
}: IProps) => {
  const { isMobile } = useContext(ThemeContext);

  return isMobile ? (
    <Mobile
      data={data}
      title={title}
      selectPeriod={selectPeriod}
      menuValue={menuValue}
      menuText={menuText}
    />
  ) : (
    <Desktop data={data} title={title} />
  );
};

export default PeriodSections;
