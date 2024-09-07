import { RecoilRoot } from "recoil";
import { useCookies } from "react-cookie";
import GnbBottom from "./components/Gnb/GnbBottom";
import Router from "./Router";
import { useLocation } from "react-router-dom";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const location = useLocation();

  return (
    <RecoilRoot>
      <div className="App">
        <div className="MobileContainer">
          <Router />
          {location.pathname !== "/login" && <GnbBottom />}
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
