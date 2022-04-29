import { useContext } from "react";

import "./PartyArea.css";
import TostarenaTownMusic from "../../assets/tostarena-town.mp3";
import { AudioHandlerContext } from "../../audio/AudioHandlerContext";
import ConfettiCanvas from "../../components/ConfettiCanvas/ConfettiCanvas";
import VolumeSlider from "../../components/VolumeSlider/VolumeSlider";

const PARTY_AUDIO_SOURCE_KEY = "party";

function PartyArea() {
  // get context
  const audioHandler = useContext(AudioHandlerContext);

  // setup party audio
  const audioSource =
    audioHandler.getAudioSource(PARTY_AUDIO_SOURCE_KEY) ??
    audioHandler.createAudioSource(PARTY_AUDIO_SOURCE_KEY, TostarenaTownMusic);
  audioSource.play();

  return (
    <div className="party-container">
      <ConfettiCanvas></ConfettiCanvas>
      <VolumeSlider audioSource={audioSource} />
    </div>
  );
}

export default PartyArea;
