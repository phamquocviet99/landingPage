import "./App.css";

import Body from "./components/Body/Body";

import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
    // <LandingPage />
  );
}

export default App;
