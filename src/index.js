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
      song: "magnus",
      image: 1,
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

  nextImage() {
    console.log("next image");

    if(this.state.image === 1){
      this.setState({
        image: 2
      });
    }
    else{
      this.setState({
        image: 1
      });
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

    let image;
    if(this.state.image === 1){
      image = <Entity primitive="a-sky" radius="11" src="#skyTexture1"/>
    }
    else{
      image = <Entity primitive="a-sky" radius="11" src="#skyTexture2"/>
    }


    return (

      <Scene>
        <a-assets>
          <img alt="sky" id="skyTexture1" src="./assets/background.jpg"/>
          <img alt="sky" id="skyTexture2" src="./assets/island.jpg"/>
          <audio id="senja" src="./assets/senja.mp3"/>
          <audio id="magnus" src="./assets/magnus.mp3"/>
        </a-assets>

        {image}

        {song}


        <Controls
          text={"Next Song"}
          action={this.nextSong.bind(this)}
          position={-3}/>
        <Controls
          text={this.state.playingMessage}
          action={this.playSong.bind(this)}
          position={0}/>
        <Controls
          text={"Next Image"}
          action={this.nextImage.bind(this)}
          position={3}/>

        <Entity primitive="a-camera" wasd-controls="enabled: true">
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
