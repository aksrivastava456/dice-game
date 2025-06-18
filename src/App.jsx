import { useState } from "react";
import styles from "./App.module.css";
import LandingPage from "./components/LandingPage";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  return (
    <>{isGameOn ? <GamePlay /> : <LandingPage setIsGameOn={setIsGameOn} />}</>
  );
}

export default App;
