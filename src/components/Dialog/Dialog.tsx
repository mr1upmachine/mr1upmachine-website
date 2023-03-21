import { DialogHTMLAttributes, FC, useEffect, useRef } from 'react';

export const Dialog: FC<DialogHTMLAttributes<HTMLDialogElement>> = ({
  children,
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
    <dialog
      className="tw-rounded-lg tw-p-4 tw-drop-shadow-xl backdrop:tw-bg-black backdrop:tw-bg-opacity-50 dark:tw-bg-2 dark:tw-text-white"
      onClose={onClose}
      ref={dialogRef}
    >
      <div className="tw-flex tw-flex-col tw-gap-2">{children}</div>
    </dialog>
  );
};
