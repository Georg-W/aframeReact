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
      playing: true
    };
  }

  playSong() {
    console.log("plays song");
  }

  nextSong() {
    console.log("next song");
  }


  render() {
    return (
      <Scene>
        <a-assets>
          <audio id="senja" src="./assets/senja.mp3" preload="auto"/>
          <img alt="sky" id="skyTexture" src="./assets/island.jpg"/>

          <audio id="magnus" src="./assets/magnus.mp3" preload="auto"/>
        </a-assets>

        <Entity primitive="a-sky" src="#skyTexture"/>

        <Controls
          text={"Press to Play"}
          action={this.playSong.bind(this)}
          position={-1}/>
        <Controls
          text={"Next Song"}
          action={this.nextSong.bind(this)}
          position={2}/>

        <Entity sound="src: url(./assets/senja)" autoplay={true}/>

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

    function RenderAudio (){
      if (this.state.playing === true) {
        return (
          <Entity sound="src: #senja"/>
        )
      }
      else {
        return (null);
      }
    }
  }
}

  ReactDOM.render(<App/>,document.querySelector('#sceneContainer'));
