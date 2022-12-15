import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faXmark } from "@fortawesome/pro-regular-svg-icons";
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
        <FontAwesomeIcon
          className="settings-dialog-trigger-icon"
          icon={faGear}
          aria-hidden="true"
        />
      </Button>
      <Dialog open={showSettings} onClose={() => setShowSettings(false)}>
        <div className="settings-dialog-header">
          <div className="settings-dialog-title">Settings</div>
          <Button compact={true} onClick={() => setShowSettings(false)}>
            <FontAwesomeIcon
              className="settings-dialog-close"
              icon={faXmark}
              aria-hidden="true"
            />
          </Button>
        </div>
        <Settings />
      </Dialog>
    </>
  );
}
