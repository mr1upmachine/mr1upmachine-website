import { FC } from 'react';

import { Dialog } from '../../components/Dialog/Dialog';
import { DialogBody } from '../../components/DialogBody/DialogBody';
import { DialogHeader } from '../../components/DialogHeader/DialogHeader';
import Settings from '../Settings/Settings';

export interface SettingsDialogProps {
  open: boolean;
  onClose: () => void;
}

export const SettingsDialog: FC<SettingsDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader onClose={onClose}>Settings</DialogHeader>
      <DialogBody>
        <Settings />
      </DialogBody>
    </Dialog>
  );
};
