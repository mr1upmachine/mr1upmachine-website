import { useState } from "react";

import "./PartyArea.css";
import ConfettiCanvas from "../ConfettiCanvas/ConfettiCanvas";

function PartyArea() {
  const [showPartyButton, setShowPartyButton] = useState(true);

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
    partyAreaContents = <ConfettiCanvas></ConfettiCanvas>;
  }
  return <div className="party-container">{partyAreaContents}</div>;
}

export default PartyArea;
