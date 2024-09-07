import GnbBottom from "./components/Gnb/GnbBottom";
import GnbTop from "./components/Gnb/GnbTop";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <div className="MobileContainer">
        <Router />
        <GnbTop />
        <GnbBottom />
      </div>
    </div>
  );
}

export default App;
