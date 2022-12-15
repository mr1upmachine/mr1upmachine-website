import { useEffect } from "react";

import "./PartyArea.css";
import ConfettiCanvas from "../../components/ConfettiCanvas/ConfettiCanvas";
import VolumeSlider from "../../components/VolumeSlider/VolumeSlider";
import { useAudio } from "../../hooks/useAudio";
import { AudioKeys } from "../../constants/audio-keys";

function PartyArea() {
  const audioSource = useAudio(AudioKeys.party);

  // componentWillMount
  useEffect(() => {
    audioSource.play();
  }, [audioSource]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      audioSource.pause();
    };
  }, [audioSource]);

  return (
    <div className="party-container">
      <ConfettiCanvas></ConfettiCanvas>
      <VolumeSlider audioSource={audioSource} />
    </div>
  );
}

export default PartyArea;
