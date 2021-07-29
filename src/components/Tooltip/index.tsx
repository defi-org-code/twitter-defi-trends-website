/* eslint-disable jsx-a11y/anchor-is-valid */
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { useContext, useState } from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { ThemeContext } from "../../providers/ThemeProvider";

interface IProps {
  content: any;
  btnContent: JSX.Element;
  className?: string;
  triggerOnClick?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

function FloatingTooltip({
  btnContent,
  content,
  className,
  onClick,
  style,
}: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useContext(ThemeContext);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setIsOpen(true);
  };

  return (
    <>
      {isMobile ? (
        <ClickAwayListener onClickAway={setIsOpen.bind(null, false)}>
          <Tooltip
            className={className ? `${className} tooltip` : "tooltip"}
            title={content}
            onClick={handleClick}
            arrow
            open={isOpen}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            style={style}
            enterDelay={0}
          >
            {btnContent}
          </Tooltip>
        </ClickAwayListener>
      ) : (
        <Tooltip
          className={className ? `${className} tooltip` : "tooltip"}
          title={content}
          onClick={onClick && onClick}
          arrow
          style={style}
          enterDelay={0}
        >
          {btnContent}
        </Tooltip>
      )}
    </>
  );
}

export default FloatingTooltip;
