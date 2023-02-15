import react from "react";
import {Tiles} from "./components/tiles";
import './App.css';

function App() {

  return (
    <div id="App">
      <div id="header">
        <div id="title">鬼滅の刃 Kimetsu no Yaiba memory game</div>
      </div>
      <Tiles />
    </div>
  );
}

export default App;
