import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Link className="party-button" to="party">
        Party?
      </Link>
    </div>
  );
}

export default Home;
