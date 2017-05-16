import 'aframe';
import 'aframe-animation-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';

export default class Controls extends React.Component {



  render () {
    return (
    <Entity>
      <Entity
        primitive="a-box"
        height={2}
        width={2}
        depth={0.1}
        color="#616161"
        position={{x:this.props.position, y: 1.8, z: -9}}
        events={{click: this.props.action}}/>
      <Entity
        text={{value: this.props.text, color: "#CCFF90", width: 5, height: 5, align: "center"}}
        events={{click: this.props.action}}
        position={{x:this.props.position, y: 1.8, z: -8.89}}/>
    </Entity>
    );
  }
}