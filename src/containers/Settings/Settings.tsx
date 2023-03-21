import { FC } from 'react';

import { Label } from '../../components/Label/Label';
import { Select } from '../../components/Select/Select';
import { Option } from '../../components/Select/Option';
import { ColorThemeSetting } from '../../constants/color-theme-setting';
import { ReducedMotionSetting } from '../../constants/reduced-motion-setting';
import { useColorThemeSetting } from '../../hooks/useColorThemeSetting';
import { useReducedMotionSetting } from '../../hooks/useReducedMotionSetting';

const Settings: FC = () => {
  const [colorThemeSetting, setColorThemeSetting] = useColorThemeSetting();
  const [reducedMotionSetting, setReducedMotionSetting] = useReducedMotionSetting();

  return (
    <form className="tw-flex tw-w-52 tw-flex-col">
      <fieldset className="tw-flex tw-w-full tw-flex-col tw-gap-2">
        <div>
          <Label htmlFor="color-theme-select">Color Theme</Label>
          <Select
            id="color-theme-select"
            value={colorThemeSetting}
            onChange={(e) => setColorThemeSetting(e.target.value as ColorThemeSetting)}
          >
            <Option value={ColorThemeSetting.inherit}>Inherit</Option>
            <Option value={ColorThemeSetting.light}>Light</Option>
            <Option value={ColorThemeSetting.dark}>Dark</Option>
          </Select>
        </div>

        <div>
          <Label htmlFor="reduced-motion-select">Reduced Motion</Label>
          <Select
            id="reduced-motion-select"
            value={reducedMotionSetting.toString()}
            onChange={(e) => setReducedMotionSetting(e.target.value as ReducedMotionSetting)}
          >
            <Option value={ReducedMotionSetting.inherit}>Inherit</Option>
            <Option value={ReducedMotionSetting.true}>True</Option>
            <Option value={ReducedMotionSetting.false}>False</Option>
          </Select>
        </div>
      </fieldset>
    </form>
  );
};

export default Settings;
