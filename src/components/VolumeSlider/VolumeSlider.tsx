import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useEffect, useState, ChangeEvent, FC } from 'react';

import './VolumeSlider.css';
import { AudioSource } from '../../services/audio/audio-source';
import Button from '../Button/Button';

interface VolumeSliderProps {
  audioSource: AudioSource;
}

const VolumeSlider: FC<VolumeSliderProps> = ({ audioSource }) => {
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
    <div className="volume-slider">
      <input
        type="range"
        className="volume-slider-range"
        min="0"
        max="100"
        step="1"
        value={volume}
        onInput={volumeRangeChange}
      />
      <Button className="volume-slider-mute-button" compact={true} onClick={muteButtonClick}>
        {mute || volume === 0 ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </Button>
    </div>
  );
};

export default VolumeSlider;
