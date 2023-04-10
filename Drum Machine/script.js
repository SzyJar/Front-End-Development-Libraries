import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import { useState } from "https://cdn.skypack.dev/react@17.0.1";

function ReactApp() {
const [soundName, setSoundName] = useState('');
  
  function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    audio.currentTime = 0;
    setSoundName(audioId);
    audio.play();
  }
  
  document.addEventListener('keydown', function(event) {
    if (event.keyCode === 81) {
      playAudio("Q");
    }
    if (event.keyCode === 87) {
      playAudio('W');
    }
   if (event.keyCode === 69) {
      playAudio('E');
    }
   if (event.keyCode === 65) {
      playAudio('A');
    }
   if (event.keyCode === 83) {
      playAudio('S');
    }
   if (event.keyCode === 68) {
      playAudio('D');
    }
   if (event.keyCode === 90) {
      playAudio('Z');
    }
   if (event.keyCode === 88) {
      playAudio('X');
    }
   if (event.keyCode === 67) {
      playAudio('C');
    }
  });
  
  return(
  <div class="center" id="drum-machine">
      <div id="keys">
      <button onClick={() => playAudio("Q")} class="drum-pad" id="drum-Q">Q
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q" class="clip"/>
        </button>
      <button onClick={() => playAudio("W")} class="drum-pad" id="drum-W">W
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W" class="clip"/>
        </button>
      <button onClick={() => playAudio("E")} class="drum-pad" id="drum-E">E
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E" class="clip"/>
        </button>
      <button onClick={() => playAudio("A")} class="drum-pad" id="drum-A">A
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A" class="clip"/>
        </button>
      <button onClick={() => playAudio("S")} class="drum-pad" id="drum-S">S
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S" class="clip"/>
        </button>
      <button onClick={() => playAudio("D")} class="drum-pad" id="drum-D">D
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D" class="clip"/>
        </button>
      <button onClick={() => playAudio("Z")} class="drum-pad" id="drum-Z">Z
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z" class="clip"/>
        </button>
      <button onClick={() => playAudio("X")} class="drum-pad" id="drum-X">X
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X" class="clip"/>
        </button>
      <button onClick={() => playAudio("C")} class="drum-pad" id="drum-C">C
        <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C" class="clip"/>
        </button>
      </div>
      <div id="display">
        {soundName}
      </div>
  </div>
  );
}

ReactDOM.render(<ReactApp />, document.getElementById("root"));