import Modal from "@material-ui/core/Modal";
import { RefObject, useRef } from "react";

interface IProps {
  isOpen: boolean;
  content: JSX.Element;
  customClassName?: string;
  closePopup: () => void;
}

const showElement = (ref: RefObject<HTMLDivElement>) => {
  if (ref.current) {
    ref.current.style.opacity = "1";
  }
};

const Overlay = ({ closePopup }: { closePopup: () => void }) => {
  return <div className="modal-overlay" onClick={closePopup}></div>;
};
function CustomModal({ isOpen, content, customClassName, closePopup }: IProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const className = customClassName ? `${customClassName} modal` : "modal";
  return (
    <Modal
      className={className}
      open={isOpen}
      BackdropComponent={() => <Overlay closePopup={closePopup} />}
    >
      <div
        className="modal-content"
        onLoad={showElement.bind(null, contentRef)}
        ref={contentRef}
        style={{ opacity: 0 }}
      >
        {content}
      </div>
    </Modal>
  );
}

export default CustomModal;
