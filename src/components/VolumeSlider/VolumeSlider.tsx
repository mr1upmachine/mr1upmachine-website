import { faVolume, faVolumeSlash } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, ChangeEvent, useContext } from "react";

import "./VolumeSlider.css";
import { AudioHandlerContext } from "../../audio/AudioHandlerContext";

interface VolumeSliderProps {
  audioSourceKey: string;
  defaultVolume: number;
  initialVolume: number;
  initialMute: boolean;
}

function VolumeSlider({
  audioSourceKey,
  defaultVolume,
  initialMute,
  initialVolume,
}: VolumeSliderProps) {
  // context
  const audioHandler = useContext(AudioHandlerContext);

  // state variables
  const [volume, setVolume] = useState(initialVolume);
  const [mute, setMute] = useState(initialMute);

  // hook up slider to audio source
  useEffect(() => {
    const audioSource = audioHandler.getAudioSource(audioSourceKey);
    audioSource.muted = mute;
    localStorage.setItem("mute", mute.toString());
  }, [audioHandler, audioSourceKey, mute]);
  useEffect(() => {
    const audioSource = audioHandler.getAudioSource(audioSourceKey);
    audioSource.volume = volume / 100;
    localStorage.setItem("volume", volume.toString());
  }, [audioHandler, audioSourceKey, volume]);

  const volumeRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt((e.target as HTMLInputElement).value ?? "0");
    setMute(false);
    setVolume(parsedValue);
  };

  const muteButtonClick = () => {
    if (!mute && volume === 0) {
      setVolume(defaultVolume);
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
      <button className="party-mute-button" onClick={muteButtonClick}>
        <FontAwesomeIcon
          icon={mute || volume === 0 ? faVolumeSlash : faVolume}
        />
      </button>
    </div>
  );
}

export default VolumeSlider;
