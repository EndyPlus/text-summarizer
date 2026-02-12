import ModalWrapper from "./ModalWrapper";

export default function ConfirmDelete({ onClose, onDelete }) {
  async function handleDelete() {
    await onDelete();
    onClose();
  }

  return (
    <ModalWrapper onClose={onClose}>
      <div className="flex flex-col bg-white">
        <button onClick={onClose} className="ml-auto cursor-pointer">
          x
        </button>
        <h4>Delete summarized text?</h4>
        <p>You will not be able to recover it.</p>
        <div className="flex gap-2">
          <button onClick={onClose} className="cursor-pointer">
            Cancel
          </button>
          <button onClick={handleDelete} className="cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
}
