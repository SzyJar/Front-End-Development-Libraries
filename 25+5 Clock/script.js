import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      timer: 60 * 25,
      breakLength: 5,
      sessionLength: 25,
      itsBreak: false,
      timerRunning: false,
      timerLabel: 'Session',
      timeLeft: '25:00',

      titleText: "25 + 5 Clock",
      breakLabel: 'Break Length',
      sessionLabel: 'Session Length'
    };
    this.interval = null;
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleStartPause = this.handleStartPause.bind(this);
    this.handlePlayAudio = this.handlePlayAudio.bind(this);
    this.handleReset = this.handleReset.bind(this);
  };
  
  handleChangeValue (value, item) {
    if(this.state.timerRunning == false){
    if(item === 1){
      let newValue = this.state.breakLength + value;
      if(newValue <= 60 && newValue >= 1 && this.state.timerRunning === false){
        this.setState({breakLength: this.state.breakLength + value});
      };
    } else {
      let newValue = this.state.sessionLength + value;
        if(newValue <= 60 && newValue >= 1 && this.state.timerRunning === false){
          this.setState({ sessionLength: this.state.sessionLength + value });
          this.setState({ timer: newValue * 60 });
          if(String(newValue).length === 1){
            newValue = ('0' + String(newValue));
          };
          this.setState({ timeLeft: (newValue +':' + '00') });
        };
      };
    };
  };
  
  handlePlayAudio() {
    let audio = document.getElementById('beep');
    audio.currentTime = 0;
    audio.play();
  };
  
  handleStartPause() {
   if(this.state.timerRunning === true){
     clearInterval(this.interval);
     this.setState({ timerRunning: false });
   } else {
     this.setState({ timerRunning: true });
     let minute = '00';
     let second = '00';
     this.interval = setInterval(() => {
       this.state.timer > 0 ? this.setState({ timer: this.state.timer - 1 }) : pass;
       minute = parseInt(this.state.timer / 60);
       second = parseInt(this.state.timer % 60)
       minute = String(minute).length === 1 ? ('0' + minute) : minute;
       second = String(second).length === 1 ? ('0' + second) : second;
       this.setState({ timeLeft: (minute +':' + second) });
       if (this.state.timer === 0) {
         this.handlePlayAudio();
         if(this.state.itsBreak == true){
           this.setState({ timerLabel: 'Session' });
           this.setState({ timer: this.state.sessionLength * 60 +1});
           this.setState({ itsBreak: false });
         } else {
           this.setState({ timerLabel: 'Break' });
           this.setState({ timer: this.state.breakLength * 60 +1});
           this.setState({ itsBreak: true });
         };
       };
     }, 1000);
   };
 };
  
 handleReset() {
   clearInterval(this.interval);
   this.setState({ breakLength: 5 });
   this.setState({ sessionLength: 25 });
   this.setState({ timeLeft: '25:00' });
   this.setState({ timerRunning: false });
   this.setState({ itsBreak: false });
   this.setState({ timer: 25 * 60 });
   this.setState({ timerLabel: 'Session' });
   let audio = document.getElementById('beep');
   audio.pause();
   audio.currentTime = 0;
  };
  
  render() {
    return(
      <div id="clock">
        <audio src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-84577/zapsplat_fantasy_magic_fairy_appear_ping_twinke_88657.mp3" id="beep"/>
        <div class="label" id="label-text">{this.state.titleText}</div>
        <div id="boxes">
          <div class="box">
            <div class="label" id="break-label">{this.state.breakLabel}</div>
            <button id="break-decrement" onClick={() => this.handleChangeValue(-1, 1)}><i class="fas fa-arrow-down"></i></button>
            <div id="break-length">{this.state.breakLength}</div>
            <button id="break-increment" onClick={() => this.handleChangeValue(1, 1)}><i class="fas fa-arrow-up"></i></button>
          </div>
          <div class="box">
            <div class="label" id="session-label">{this.state.sessionLabel}</div>
            <button id="session-decrement" onClick={() => this.handleChangeValue(-1, 2)}><i class="fas fa-arrow-down"></i></button>
            <div id="session-length">{this.state.sessionLength}</div>
            <button id="session-increment" onClick={() => this.handleChangeValue(1, 2)}><i class="fas fa-arrow-up"></i></button>
          </div>
          <div class="box">
          <div class="label" id="timer-label">{this.state.timerLabel}</div>
          <div id="time-left">{this.state.timeLeft}</div>
          </div>
        </div>
        <div>
          <button id="start_stop" onClick={() => this.handleStartPause(1, 2)}><i class="fas fa-play"></i><i class="fas fa-pause"></i></button>
          <button id="reset" onClick={() => this.handleReset()}><i class="fas fa-sync-alt"></i></button>
        </div>
      </div>
    );
  };
};

ReactDOM.render(<App />, document.getElementById("root"));