import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { ChangeEvent, FC, useCallback } from 'react';

import { DEFAULT_VOLUME, MAX_VOLUME, MIN_VOLUME } from '../../constants/audio-defaults';
import { Button } from '../Button/Button';
import './VolumeSlider.css';

export interface VolumeSliderProps {
  mute: boolean;
  onMuteChange: (newValue: boolean) => void;
  onVolumeChange: (newValue: number) => void;
  volume: number;
}

export const VolumeSlider: FC<VolumeSliderProps> = ({
  mute,
  onMuteChange,
  onVolumeChange,
  volume,
}) => {
  const volumeRangeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const parsedValue = parseInt(e.target.value);
      onMuteChange(false);
      onVolumeChange(parsedValue);
    },
    [onMuteChange, onVolumeChange]
  );

  const muteButtonClick = useCallback(() => {
    if (!mute && volume === 0) {
      onVolumeChange(DEFAULT_VOLUME);
    } else {
      onMuteChange(!mute);
    }
  }, [mute, volume, onMuteChange, onVolumeChange]);

  return (
    <div
      tabIndex={0}
      className="volume-slider-container tw-absolute tw-bottom-2 tw-right-2 tw-flex tw-flex-col tw-items-center tw-gap-2 tw-rounded-md tw-bg-1 tw-p-1 tw-transition-opacity tw-opacity-40 tw-duration-300 hover:tw-pt-2 focus-within:tw-pt-2 focus-within:tw-opacity-100 hover:tw-opacity-100 dark:tw-bg-2 tw-outline-focus focus:tw-outline focus:tw-outline-4"
    >
      <input
        type="range"
        className="volume-slider-input writing-vertical tw-cursor-pointer tw-rounded-sm tw-outline-focus focus:tw-outline focus:tw-outline-4"
        min={MIN_VOLUME}
        max={MAX_VOLUME}
        step="1"
        value={volume}
        onInput={volumeRangeChange}
      />
      <Button compact={true} onClick={muteButtonClick}>
        {mute || volume === MIN_VOLUME ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </Button>
    </div>
  );
};
