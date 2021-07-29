import { useContext, useState } from "react";
import { ThemeContext } from "../../../../providers/ThemeProvider";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { IViewOption, VIEW_SELECTOR_OPTIONS } from "../../types";
import Option from "./components/ViewOption";

interface IProps {
  options: IViewOption[];
  handleViewSelectDesktop: (name: VIEW_SELECTOR_OPTIONS, delay: number) => void;
  handleViewSelectMobile: (name: VIEW_SELECTOR_OPTIONS) => void;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ViewSelector = ({
  options,
  handleViewSelectDesktop,
  handleViewSelectMobile,
}: IProps) => {
  const [selected, setSelected] = useState(VIEW_SELECTOR_OPTIONS.ALL_TWEETS);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isMobile } = useContext(ThemeContext);

  const select = (option: IViewOption, index: number) => {
    setSelected(option.value);
    setSelectedIndex(index);
    if (isMobile) {
      return handleViewSelectMobile(option.value);
    }
    handleViewSelectDesktop(option.value, option.animatiomEndTimeout);
  };

  return (
    <>
      <div className="view-selector flex">
        <Tabs
          variant="scrollable"
          scrollButtons="off"
          TabIndicatorProps={{ style: { background: "#FFC542" } }}
          value={selectedIndex}
        >
          {options.map((option: IViewOption, index: number) => {
            return (
              <Tab
                key={option.value}
                {...a11yProps(index)}
                style={{ paddingBottom: 0, opacity: 1 }}
                label={
                  <Option
                    key={option.value}
                    option={option}
                    selected={selected}
                    select={() => select(option, index)}
                  />
                }
              />
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

export default ViewSelector;
