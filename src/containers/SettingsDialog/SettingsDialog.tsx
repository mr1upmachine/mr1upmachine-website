import ClearIcon from "@mui/icons-material/Clear";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

import Button from "../../components/Button/Button";
import { Dialog } from "../../components/Dialog/Dialog";
import Settings from "../Settings/Settings";
import "./SettingsDialog.css";

export function SettingsDialog() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <Button
        className="settings-dialog-trigger"
        onClick={() => setShowSettings((prev) => !prev)}
        compact={true}
      >
        <SettingsIcon
          className="settings-dialog-trigger-icon"
          aria-hidden="true"
        />
      </Button>
      <Dialog open={showSettings} onClose={() => setShowSettings(false)}>
        <div className="settings-dialog-header">
          <div className="settings-dialog-title">Settings</div>
          <Button compact={true} onClick={() => setShowSettings(false)}>
            <ClearIcon className="settings-dialog-close" aria-hidden="true" />
          </Button>
        </div>
        <Settings />
      </Dialog>
    </>
  );
}
