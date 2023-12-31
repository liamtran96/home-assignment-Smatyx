import Modal from "react-modal";
import { useStateContext } from "../context/state-context";

Modal.setAppElement("#root");

export const ModalContent = () => {
  const { modal, setModal } = useStateContext();
  return (
    <Modal
      isOpen={modal.open}
      onRequestClose={() => setModal({ open: false })}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className="h-full rounded-lg bg-[#ffff] backdrop-blur-sm">
        <div className="flex flex-row items-center justify-between p-4">
          {modal.title}
          <button
            type="button"
            onClick={() => setModal({ open: false })}
          ></button>
        </div>
        {modal.body}
      </div>
    </Modal>
  );
};
