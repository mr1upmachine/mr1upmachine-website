import "./Home.css";
import { useEvents } from "../../services/events/use-events";
import { Particles } from "../../components/Particles/Particles";

function Home() {
  const { events, currentEvents, currentActions } = useEvents();

  for (const { audio, behavior } of currentActions) {
    switch (behavior) {
      case "SNOW":
        console.log("It is snowing");
        break;
    }

    if (audio) {
      for (const a of audio) {
        a.play();
      }
    }
  }

  return (
    <div className="home-container">
      <div>events {JSON.stringify(events)}</div>
      <div>currentEvents {JSON.stringify(currentEvents)}</div>
      <div>currentActions {JSON.stringify(currentActions)}</div>
      <Particles></Particles>
    </div>
  );
}

export default Home;
