import { faVolume, faVolumeSlash } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, ChangeEvent } from "react";

import "./VolumeSlider.css";
import { AudioSource } from "../../services/audio/audio-source";
import Button from "../Button/Button";

interface VolumeSliderProps {
  audioSource: AudioSource;
}

function VolumeSlider({ audioSource }: VolumeSliderProps) {
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
    const parsedValue = parseInt((e.target as HTMLInputElement).value ?? "0");
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
    <div className="party-volume-slider">
      <input
        type="range"
        className="party-volume-range"
        min="0"
        max="100"
        step="1"
        value={volume}
        onInput={volumeRangeChange}
      />
      <Button
        className="party-mute-button"
        compact={true}
        onClick={muteButtonClick}
      >
        <FontAwesomeIcon
          icon={mute || volume === 0 ? faVolumeSlash : faVolume}
        />
      </Button>
    </div>
  );
}

export default VolumeSlider;
