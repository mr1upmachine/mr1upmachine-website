import { DialogHTMLAttributes, useEffect, useRef } from "react";

import "./Dialog.css";

export function Dialog({
  children,
  onCancel,
  onClose,
  open,
}: DialogHTMLAttributes<HTMLDialogElement>) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.addEventListener("click", (event) => {
      const rect = (event.target as any)?.getBoundingClientRect();

      if (
        rect.left > event.clientX ||
        rect.right < event.clientX ||
        rect.top > event.clientY ||
        rect.bottom < event.clientY
      ) {
        dialogRef.current?.close();
      }
    });
  }, []);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <dialog
      className="dialog"
      onCancel={onCancel}
      onClose={onClose}
      ref={dialogRef}
    >
      {children}
    </dialog>
  );
}
