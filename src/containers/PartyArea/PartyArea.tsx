import { useContext, useEffect } from "react";

import "./PartyArea.css";
import TostarenaTownMusic from "../../assets/tostarena-town.mp3";
import { AudioManagerContext } from "../../services/audio/audio-manager-context";
import ConfettiCanvas from "../../components/ConfettiCanvas/ConfettiCanvas";
import VolumeSlider from "../../components/VolumeSlider/VolumeSlider";

const PARTY_AUDIO_SOURCE_KEY = "party";

function PartyArea() {
  // get context
  const audioManager = useContext(AudioManagerContext);

  // setup party audio
  const audioSource =
    audioManager.getAudioSource(PARTY_AUDIO_SOURCE_KEY) ??
    audioManager.createAudioSource(PARTY_AUDIO_SOURCE_KEY, TostarenaTownMusic);

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
