import { useContext, useEffect, useState } from "react";

import "./Settings.css";
import LinkAnchor from "../../components/LinkAnchor/LinkAnchor";
import { SettingsManagerContext } from "../../services/settings/settings-manager-context";
import {
  ColorThemeSetting,
  ReducedMotionSetting,
} from "../../services/settings/settings-manager";

function Settings() {
  const settingsManager = useContext(SettingsManagerContext);

  const [colorTheme, setColorTheme] = useState(
    settingsManager.currentColorTheme
  );
  const [reducedMotion, setReducedMotion] = useState(
    settingsManager.currentReducedMotion
  );

  useEffect(() => {
    settingsManager.setColorTheme(colorTheme);
  }, [settingsManager, colorTheme]);
  useEffect(() => {
    settingsManager.setReducedMotion(reducedMotion);
  }, [settingsManager, reducedMotion]);

  const colorThemeChange = (value: ColorThemeSetting) => {
    setColorTheme(value);
  };

  const reducedMotionChange = (value: "inherit" | "true" | "false") => {
    let parsedValue: ReducedMotionSetting;
    switch (value) {
      case "true":
        parsedValue = true;
        break;
      case "false":
        parsedValue = false;
        break;
      default:
        parsedValue = value;
        break;
    }

    setReducedMotion(parsedValue);
  };

  return (
    <div className="settings-container">
      <form className="settings-form">
        <fieldset className="settings-form-fieldset">
          <div className="settings-form-field">
            <label className="settings-form-label" htmlFor="color-theme-select">
              Color Theme
            </label>
            <select
              className="settings-form-control"
              id="color-theme-select"
              value={colorTheme}
              onChange={(e) =>
                colorThemeChange(e.target.value as ColorThemeSetting)
              }
            >
              <option value="inherit">Inherit</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div className="settings-form-field">
            <label
              className="settings-form-label"
              htmlFor="reduced-motion-select"
            >
              Reduced Motion
            </label>
            <select
              className="settings-form-control"
              id="reduced-motion-select"
              value={reducedMotion.toString()}
              onChange={(e) =>
                reducedMotionChange(
                  e.target.value as "inherit" | "true" | "false"
                )
              }
            >
              <option value="inherit">Inherit</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>
        </fieldset>
      </form>
      <div className="settings-homepage-link-container">
        <LinkAnchor to="/">Back to homepage</LinkAnchor>
      </div>
    </div>
  );
}

export default Settings;
