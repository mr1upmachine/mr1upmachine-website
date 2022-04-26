import { useContext, useEffect, useState } from "react";

import "./PartyArea.css";
import TostarenaTownMusic from "../../assets/tostarena-town.mp3";
import { AudioHandlerContext } from "../../audio/AudioHandlerContext";
import ConfettiCanvas from "../ConfettiCanvas/ConfettiCanvas";
import VolumeSlider from "../VolumeSlider/VolumeSlider";

const DEFAULT_VOLUME = 25; // 0 -> 100

function PartyArea() {
  // external values
  const initialVolume = parseInt(
    localStorage.getItem("volume") ?? DEFAULT_VOLUME.toString(),
    10
  );
  const initialMute = localStorage.getItem("mute") === "true" ?? false;

  // get context
  const audioHandler = useContext(AudioHandlerContext);

  // create state
  const [showPartyButton, setShowPartyButton] = useState(true);

  // setup party audio
  const audioSourceKey = "party";
  useEffect(() => {
    const audioSource = audioHandler.createAudioSource(
      audioSourceKey,
      TostarenaTownMusic
    );
    audioSource.muted = initialMute;
    audioSource.volume = initialVolume / 100;
  }, [audioHandler, initialMute, initialVolume]);

  let partyAreaContents: JSX.Element;
  if (showPartyButton) {
    const partyButtonClick = () => {
      setShowPartyButton(false);
    };
    partyAreaContents = (
      <button className="party-button" onClick={partyButtonClick}>
        Party?
      </button>
    );
  } else {
    const audioSource = audioHandler.getAudioSource(audioSourceKey);
    audioSource.play();
    partyAreaContents = (
      <>
        <ConfettiCanvas></ConfettiCanvas>
        <VolumeSlider
          audioSourceKey={audioSourceKey}
          defaultVolume={DEFAULT_VOLUME}
          initialMute={initialMute}
          initialVolume={initialVolume}
        />
      </>
    );
  }
  return <div className="party-container">{partyAreaContents}</div>;
}

export default PartyArea;
