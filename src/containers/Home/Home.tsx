import { FC, useState } from 'react';

import { Button } from '../../components/Button/Button';
import PartyArea from '../../components/PartyArea/PartyArea';

const Home: FC = () => {
  const [partyMode, setPartyMode] = useState(false);
  return (
    <>
      {partyMode ? (
        <PartyArea />
      ) : (
        <div className="tw-relative tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center">
          <Button color="primary" onClick={() => setPartyMode(true)}>
            Party?
          </Button>
        </div>
      )}
    </>
  );
};

export default Home;
