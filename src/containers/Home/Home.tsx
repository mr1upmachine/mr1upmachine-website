import "./Home.css";
import LinkButton from "../../components/LinkButton/LinkButton";

function Home() {
  return (
    <div className="home-container">
      <LinkButton color="primary" to="party">
        Party?
      </LinkButton>
    </div>
  );
}

export default Home;
