import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Controls from './components/Controls';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      playing: false,
      playingMessage: "Press to Play",
      song: "magnus"
    };
  }

  playSong() {
    console.log("plays song");
    let entity = document.querySelector('[sound]');
    if(this.state.playing) {
      entity.components.sound.pauseSound();
      this.setState({
        playing: false,
        playingMessage: "Press to Play"
      })
    }
    else{
      entity.components.sound.playSound();
      this.setState({
        playing: true,
        playingMessage: "Press to Pause"
      })
    }
  }

  nextSong() {
    console.log("next song");
    if(this.state.song === "magnus"){
      this.setState({
        song: "senja",
        playing: true,
        playingMessage: "Press to Pause"
      });
      console.log("next pressed senja");
      this.playSong();
    }
    else{
      this.setState({
        song: "magnus",
        playing: true,
        playingMessage: "Press to Pause"
      });
      console.log("next pressed magnus");
      this.playSong();
    }
  }



  render() {

    let song;
    if(this.state.song === "magnus"){
      song = <Entity id="song" sound="src: #magnus"/>;
    }
    else{
      song = <Entity id="song" sound="src: #senja"/>;
    }


    return (

      <Scene>
        <a-assets>
          <img alt="sky" id="skyTexture" src="./assets/background.jpg"/>
          <audio id="senja" src="./assets/senja.mp3"/>
          <audio id="magnus" src="./assets/magnus.mp3"/>
        </a-assets>

        {song}

        <Entity primitive="a-sky" src="#skyTexture"/>

        <Controls
          text={this.state.playingMessage}
          action={this.playSong.bind(this)}
          position={-1}/>
        <Controls
          text={"Next Song"}
          action={this.nextSong.bind(this)}
          position={10}/>

        <Entity primitive="a-camera" wasd-controls="enabled: false">
          <Entity primitive="a-cursor" animation__click={{
            property: 'scale',
            startEvents: 'click',
            from: '0.1 0.1 0.1',
            to: '1 1 1',
            dur: 1000
          }}/>
        </Entity>
      </Scene>
    );


  }
}

  ReactDOM.render(<App/>,document.querySelector('#sceneContainer'));
