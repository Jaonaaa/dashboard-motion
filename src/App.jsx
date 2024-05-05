import { Route, Routes } from "react-router-dom";
import { useMyNotifs } from "./utilsComponents/Notif/useNotifs";
import { useDefaultTheme } from "./themes/Theme";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import List from "./components/List";
import useAuth from "./hooks/useAuth";

import "./App.sass";
import ListSuspect from "./components/ListSuspect";

function App() {
  useDefaultTheme();
  // useAuth();
  const { notifs } = useMyNotifs();

  return (
    <div className="App">
      {notifs.map((notif) => notif)}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/list">
          <Route path="agent" element={<List title={"Les agents"} url={"agents"} />} />
          <Route path="missions" element={<List title={"Les missions"} url={"missions"} />} />
          <Route path="suspect" element={<ListSuspect title={"Les suspects"} />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
