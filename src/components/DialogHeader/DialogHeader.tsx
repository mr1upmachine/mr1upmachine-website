import { FC, HTMLAttributes } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

import { IconButton, IconButtonProps } from '../IconButton/IconButton';

type DialogHeaderProps = HTMLAttributes<HTMLDivElement> & {
  onClose: IconButtonProps['onClick'];
};

export const DialogHeader: FC<DialogHeaderProps> = ({ children, onClose }) => {
  return (
    <div className="tw-flex tw-items-center tw-justify-between">
      <span className="tw-text-2xl">{children}</span>
      <IconButton compact onClick={onClose} aria-label="Close dialog">
        <ClearIcon aria-hidden="true" />
      </IconButton>
    </div>
  );
};
