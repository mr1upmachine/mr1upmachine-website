import { DialogHTMLAttributes, FC, useEffect, useRef } from 'react';

import './Dialog.css';

export const Dialog: FC<DialogHTMLAttributes<HTMLDialogElement>> = ({
  children,
  onCancel,
  onClose,
  open,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.addEventListener('click', (event) => {
      const el = event.target as HTMLElement | null;
      if (el?.tagName !== 'DIALOG') {
        return;
      }

      const rect = el.getBoundingClientRect();

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
    <dialog className="dialog" onCancel={onCancel} onClose={onClose} ref={dialogRef}>
      {children}
    </dialog>
  );
};
