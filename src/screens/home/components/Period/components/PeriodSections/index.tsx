import { IPeriodData } from "../../../../types/index";
import useMobile from "../../../../../../hooks/useMobile";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

interface IProps {
  data: IPeriodData[];
  title: string;
}

const PeriodSections = (props: IProps) => {
  const [isMobile] = useMobile();
  return isMobile ? <Mobile {...props} /> : <Desktop {...props} />;
};

export default PeriodSections;
