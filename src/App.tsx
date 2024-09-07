import GnbBottom from "./components/Gnb/GnbBottom";
import Router from "./Router";

function App() {
  const token = sessionStorage.getItem("token");

  return (
    <div className="App">
      <div className="MobileContainer">
        <Router />
        {token && <GnbBottom />}
      </div>
    </div>
  );
}

export default App;
