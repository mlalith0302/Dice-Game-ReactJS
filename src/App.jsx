import React, { useState } from "react"
import GamePlay from "./Components/GamePlay";
import StartGamePlay from "./Components/StartGamePlay";
function App() {
  const [isGameStarted, setGameStarted] = useState(true);
  const toggleGamePlay = ()=>{
    setGameStarted((prev)=> !prev);
  }
  return (
    <>
     {isGameStarted ? <GamePlay /> : <StartGamePlay toggle={toggleGamePlay}/>}
    </>
  )
}

export default App
