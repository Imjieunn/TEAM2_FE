import GnbBottom from "./components/Gnb/GnbBottom";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <div className="MobileContainer">
        <Router />
        <GnbBottom />
      </div>
    </div>
  );
}

export default App;
