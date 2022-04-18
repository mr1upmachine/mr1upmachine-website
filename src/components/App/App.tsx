import "./App.css";
import Footer from "../Footer/Footer";
import PartyArea from "../PartyArea/PartyArea";

function App() {
  return (
    <div className="app-container">
      <div className="app-main">
        <PartyArea></PartyArea>
      </div>
      <footer className="app-footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
