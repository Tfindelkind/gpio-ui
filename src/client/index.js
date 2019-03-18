/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

import redicon from './red.png';
import greenicon from './green.png';
import rpi from './rpi.jpg';

import styles from './gpio-ui.css';

const axios = require('axios');
const SERVER_IP = '192.168.178.200';
const server_URL = 'http://' + SERVER_IP + ':9090';

const imagesPath = {
  red: redicon,
  green: greenicon
};

var gpio7 = false;
var gpio7_image = 'red';
var gpio11 = false;
var gpio11_image = 'red';

function getImage(gpio) {
  return (gpio ? "red" : "green");
}

class App extends React.Component {
  state = {
    open: true
  }

toggleGPIO7 = () => {
    console.log("gpio7");
    gpio7 = !gpio7;
    gpio7_image = getImage(gpio7);
    console.log("Image: "+gpio7_image);
    gpio7 ?  axios.post(server_URL+'/api/gpio7/on', {}) : axios.post(server_URL+'/api/gpio7/off', {})
    this.setState(state => ({ open: !state.open }))
  }

  toggleGPIO11 = () => {
    console.log("gpio11");
    gpio11 = !gpio11;
    gpio11_image = getImage(gpio11);
    console.log("Image: "+gpio7_image);
    gpio11 ?  axios.post(server_URL+'/api/gpio11/on', {}) : axios.post(server_URL+'/api/gpio11/off', {})
    this.setState(state => ({ open: !state.open }))
    }


render() {
  return (
    <div className={styles.Board}>
      <img src={imagesPath[gpio7_image]} onClick={this.toggleGPIO7} className={styles.GPIO7}/>
      <img src={imagesPath[gpio11_image]} onClick={this.toggleGPIO11} className={styles.GPIO11}/>
      <img src={rpi}/>
    </div>
  );
}

}

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
