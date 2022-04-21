import { faVolume, faVolumeSlash } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect, useState, ChangeEvent } from "react";

import "./VolumeSlider.css";
import TostarenaTownMusic from "../../assets/tostarena-town.mp3";

const DEFAULT_VOLUME = 50; // 0 -> 100

function VolumeSlider() {
  // external values
  const initialVolume = parseInt(
    localStorage.getItem("volume") ?? DEFAULT_VOLUME.toString(),
    10
  );
  const initialMute = localStorage.getItem("mute") === "true" ?? false;

  // state variables
  const [volume, setVolume] = useState(initialVolume);
  const [mute, setMute] = useState(initialMute);

  // set up audio element
  const audioElementRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    const audioElement = audioElementRef.current!;
    audioElement.muted = mute;
    localStorage.setItem("mute", mute.toString());
  }, [mute]);
  useEffect(() => {
    const audioElement = audioElementRef.current!;
    audioElement.volume = volume / 100;
    localStorage.setItem("volume", volume.toString());
  }, [volume]);

  const volumeRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt((e.target as HTMLInputElement).value ?? "0");
    setMute(false);
    setVolume(parsedValue);
  };

  const muteButtonClick = () => {
    if (!mute && volume === 0) {
      setVolume(DEFAULT_VOLUME);
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
      <audio
        ref={audioElementRef}
        preload="auto"
        src={TostarenaTownMusic}
        loop={false}
        autoPlay={true}
      ></audio>
    </div>
  );
}

export default VolumeSlider;
