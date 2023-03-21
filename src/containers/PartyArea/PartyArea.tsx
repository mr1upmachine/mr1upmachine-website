import { FC, useEffect } from 'react';

import './PartyArea.css';
import { ConfettiCanvas } from '../../components/ConfettiCanvas/ConfettiCanvas';
import { VolumeSlider } from '../../components/VolumeSlider/VolumeSlider';
import { useAudio } from '../../hooks/useAudio';
import { AudioKeys } from '../../constants/audio-keys';

const PartyArea: FC = () => {
  const { play, pause, mute, setMute, volume, setVolume } = useAudio(AudioKeys.party);

  useEffect(() => {
    play();
    return () => {
      pause();
    };
  }, [play, pause]);

  return (
    <div className="party-container tw-relative tw-h-full tw-w-full">
      <ConfettiCanvas></ConfettiCanvas>
      <VolumeSlider mute={mute} onMuteChange={setMute} volume={volume} onVolumeChange={setVolume} />
    </div>
  );
};

export default PartyArea;
