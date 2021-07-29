import Modal from "@material-ui/core/Modal";

interface IProps {
  isOpen: boolean;
  content: JSX.Element;
  customClassName?: string;
  closePopup: () => void;
}

const Overlay = ({ closePopup }: { closePopup: () => void }) => {
  return <div className="modal-overlay" onClick={closePopup}></div>;
};
function CustomModal({ isOpen, content, customClassName, closePopup }: IProps) {
  const className = customClassName ? `${customClassName} modal` : "modal";
  return (
    <Modal
      className={className}
      open={isOpen}
      BackdropComponent={() => <Overlay closePopup={closePopup} />}
    >
      <div className="modal-content">{content}</div>
    </Modal>
  );
}

export default CustomModal;
