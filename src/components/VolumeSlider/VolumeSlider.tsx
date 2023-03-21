import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useEffect, useState, ChangeEvent, FC } from 'react';

import { AudioSource } from '../../services/audio/audio-source';
import { Button } from '../Button/Button';

export interface VolumeSliderProps {
  audioSource: AudioSource;
}

export const VolumeSlider: FC<VolumeSliderProps> = ({ audioSource }) => {
  // state variables
  const [volume, setVolume] = useState(audioSource.volume);
  const [mute, setMute] = useState(audioSource.mute);

  // hook up slider to audio source
  useEffect(() => {
    audioSource.setMute(mute);
  }, [audioSource, mute]);
  useEffect(() => {
    audioSource.setVolume(volume);
  }, [audioSource, volume]);

  const volumeRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value);
    setMute(false);
    setVolume(parsedValue);
  };

  const muteButtonClick = () => {
    if (!mute && volume === 0) {
      setVolume(AudioSource.DEFAULT_VOLUME);
    } else {
      setMute(!mute);
    }
  };

  return (
    <div className="tw-absolute tw-bottom-2 tw-right-2 tw-flex tw-gap-2 tw-rounded-md tw-bg-2 tw-p-1 tw-pt-[185px] tw-opacity-40 tw-duration-300 focus-within:tw-opacity-100 hover:tw-opacity-100">
      <input
        type="range"
        className="tw-absolute tw-bottom-28 tw-right-[-69px] tw-w-[170px] -tw-rotate-90 tw-cursor-pointer tw-rounded-sm tw-outline-focus focus:tw-outline focus:tw-outline-4"
        min="0"
        max="100"
        step="1"
        value={volume}
        onInput={volumeRangeChange}
      />
      <Button compact={true} onClick={muteButtonClick}>
        {mute || volume === 0 ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </Button>
    </div>
  );
};
