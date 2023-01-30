import { FC } from 'react';

import './Home.css';
import LinkButton from '../../components/LinkButton/LinkButton';

const Home: FC = () => {
  return (
    <div className="home-container">
      <LinkButton color="primary" to="party">
        Party?
      </LinkButton>
    </div>
  );
};

export default Home;
