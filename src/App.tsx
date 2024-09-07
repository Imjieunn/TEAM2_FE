import { RecoilRoot } from "recoil";
import GnbBottom from "./components/Gnb/GnbBottom";
import Router from "./Router";

function App() {
  const token = sessionStorage.getItem("token");

  return (
    <RecoilRoot>
      <div className="App">
        <div className="MobileContainer">
          <Router />
          {token && <GnbBottom />}
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
