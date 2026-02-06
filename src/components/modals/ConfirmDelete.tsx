import { createPortal } from "react-dom";

function DeleteWindow({ onClose, onDelete }) {
  async function handleDelete() {
    await onDelete();
    onClose();
  }

  return (
    <div className="absolute z-10 flex h-full w-full items-center justify-center">
      <div
        onClick={onClose}
        className="absolute z-20 h-full w-full bg-black/30"
      ></div>
      <div className="z-30 flex flex-col bg-white">
        <button className="ml-auto cursor-pointer">x</button>
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
    </div>
  );
}

export default function ConfirmDelete({ onClose, onDelete }) {
  return createPortal(
    <DeleteWindow onClose={onClose} onDelete={onDelete} />,
    document.getElementById("modal"),
  );
}
