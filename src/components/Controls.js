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
        position={{x:this.props.position, y: 2, z: -7}}
        events={{click: this.props.action}}/>
      <Entity
        text={{value: this.props.text, color: "#E0E0E0", width: 5, height: 5, align: "center"}}
        events={{click: this.props.action}}
        position={{x:this.props.position, y: 2, z: -6.89}}/>
    </Entity>
    );
  }
}