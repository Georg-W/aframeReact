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
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene>
        <a-assets>
          <img alt="360 picture" id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
          <img alt="sky" id="skyTexture" src="./assets/island.jpg"/>
        </a-assets>

        <Entity primitive="a-sky" src="#skyTexture"/>

        <Controls
          text={"Press to Play"}
          position={1}/>
        <Controls
          text={"Next Song"}
          position={4}/>

        <Entity primitive="a-camera" wasd-controls="enabled: false">
          <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>
        </Entity>
      </Scene>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#sceneContainer'));
