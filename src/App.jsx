import LandingPage from "./components/LandingPage";
import './App.css'
import { useState } from "react";
import GamePlay from "./components/GamePlay";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <div>
      {isGameStarted ? <GamePlay /> : <LandingPage toggle = {toggleGamePlay} />};
    </div>
  )
}

export default App;
