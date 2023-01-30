import { FC } from 'react';

import { ColorThemeSetting } from '../../constants/color-theme-setting';
import { ReducedMotionSetting } from '../../constants/reduced-motion-setting';
import { useColorThemeSetting } from '../../hooks/useColorThemeSetting';
import { useReducedMotionSetting } from '../../hooks/useReducedMotionSetting';
import './Settings.css';

const Settings: FC = () => {
  const [colorThemeSetting, setColorThemeSetting] = useColorThemeSetting();
  const [reducedMotionSetting, setReducedMotionSetting] = useReducedMotionSetting();

  return (
    <div className="settings-container">
      <form className="settings-form">
        <fieldset className="settings-form-fieldset">
          <div className="settings-form-field">
            <label className="settings-form-label" htmlFor="color-theme-select">
              Color Theme
            </label>
            <select
              className="settings-form-control settings-select"
              id="color-theme-select"
              value={colorThemeSetting}
              onChange={(e) => setColorThemeSetting(e.target.value as ColorThemeSetting)}
            >
              <option className="settings-select-option" value={ColorThemeSetting.inherit}>
                Inherit
              </option>
              <option className="settings-select-option" value={ColorThemeSetting.light}>
                Light
              </option>
              <option className="settings-select-option" value={ColorThemeSetting.dark}>
                Dark
              </option>
            </select>
          </div>

          <div className="settings-form-field">
            <label className="settings-form-label" htmlFor="reduced-motion-select">
              Reduced Motion
            </label>
            <select
              className="settings-form-control settings-select"
              id="reduced-motion-select"
              value={reducedMotionSetting.toString()}
              onChange={(e) => setReducedMotionSetting(e.target.value as ReducedMotionSetting)}
            >
              <option className="settings-select-option" value={ReducedMotionSetting.inherit}>
                Inherit
              </option>
              <option className="settings-select-option" value={ReducedMotionSetting.true}>
                True
              </option>
              <option className="settings-select-option" value={ReducedMotionSetting.false}>
                False
              </option>
            </select>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Settings;
