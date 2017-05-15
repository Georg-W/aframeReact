import 'aframe';
import 'aframe-animation-component';
import 'babel-polyfill';
import {Entity} from 'aframe-react';
import React from 'react';

export default class Controls extends React.Component {



  render () {

    return (
    <Entity>
      <Entity primitive="a-box" height={2} width={2} depth={0.1} position={{x:this.props.position, y: 2, z: -5}}/>
      <Entity text={{value: this.props.text, color: "black", width: 5, height: 5, align: "center"}} position={{x:this.props.position, y: 2, z: -4.89}}/>
    </Entity>
    );
  }
}