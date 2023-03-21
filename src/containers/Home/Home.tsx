import { FC } from 'react';

import { LinkButton } from '../../components/LinkButton/LinkButton';

const Home: FC = () => {
  return (
    <div className="tw-relative tw-flex tw-h-full tw-w-full tw-items-center tw-justify-center">
      <LinkButton color="primary" to="party">
        Party?
      </LinkButton>
    </div>
  );
};

export default Home;
