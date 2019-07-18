import React from 'react';
import ReactDOM from 'react-dom';

import redicon from './red.png';
import greenicon from './green.png';
import rpi from './rpi.jpg';

import styles from './gpio-ui.css';

const axios = require('axios');
const SERVER_IP = '192.168.178.200';
const server_URL = 'http://' + SERVER_IP + ':9090';

var gpio4;
var gpio17;

<<<<<<< HEAD
axios.get(server_URL+'/api/gpio4/state')
.then(function (response) {
  gpio4 = (response.data == 1);
  console.log(gpio4);
  gpio4_image=getImage(gpio4);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});

axios.get(server_URL+'/api/gpio17/state')
.then(function (response) {
  gpio17 = (response.data == 1);
  console.log(gpio17);
  gpio17_image=getImage(gpio17);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});

var gpio4_image;
var gpio17_image;

=======
>>>>>>> 9da5965e1a19810128c5f26ba8cc0e8f22ae338b
const imagesPath = {
  red: redicon,
  green: greenicon
};

<<<<<<< HEAD
function getImage(gpio) {
  return (gpio ? "green" : "red");
};

console.log(gpio4_image);
=======

function getImage(gpio) {
  return (gpio ? "green" : "red");
}
>>>>>>> 9da5965e1a19810128c5f26ba8cc0e8f22ae338b

var gpio4_image;
var gpio17_image;

console.log(gpio4_image);

class App extends React.Component {
  state = {
    open: true,

  }

<<<<<<< HEAD
/* getGPIO4 () {
=======
componentDidMount() {
     this.getGPIO4();
     this.getGPIO17();
     this.interval = setInterval(() => {
       this.getGPIO4();
       this.getGPIO17();
     }, 5000);
   }

  getGPIO4 = () => {
    var self = this;
>>>>>>> 9da5965e1a19810128c5f26ba8cc0e8f22ae338b
    axios.get(server_URL+'/api/gpio4/state')
    .then(function (response) {
      gpio4 = (response.data == 1);
      console.log(gpio4);
      gpio4_image=getImage(gpio4);
<<<<<<< HEAD
      }
=======
      self.setState(state => ({ open: state.open}));
      return
    })
>>>>>>> 9da5965e1a19810128c5f26ba8cc0e8f22ae338b
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
<<<<<<< HEAD
    })
  } */
=======
    });
  }

  getGPIO17 = () => {
    var self = this;
    axios.get(server_URL+'/api/gpio17/state')
    .then(function (response) {
      gpio17 = (response.data == 1);
      console.log(gpio4);
      gpio17_image=getImage(gpio17);
      self.setState(state => ({ open: state.open}));
      return
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

componentWillUnmount() {
   clearInterval(this.interval);
 }
>>>>>>> 9da5965e1a19810128c5f26ba8cc0e8f22ae338b

toggleGPIO4 = () => {
    console.log("gpio4");
    gpio4 = !gpio4;
    gpio4_image = getImage(gpio4);
    console.log("Image: "+gpio4_image);
    gpio4 ?  axios.post(server_URL+'/api/gpio4/on', {}) : axios.post(server_URL+'/api/gpio4/off', {})
    this.setState(state => ({ open: !state.open }))
  }

toggleGPIO17 = () => {
    console.log("gpio17");
    gpio17 = !gpio17;
    gpio17_image = getImage(gpio17);
    console.log("Image: "+gpio17_image);
    gpio17 ?  axios.post(server_URL+'/api/gpio17/on', {}) : axios.post(server_URL+'/api/gpio17/off', {})
    this.setState(state => ({ open: !state.open }))
    }


render() {
  return (
    <div className={styles.Board}>
      <img src={imagesPath[gpio4_image]} onClick={this.toggleGPIO4} className={styles.GPIO4}/>
      <img src={imagesPath[gpio17_image]} onClick={this.toggleGPIO17} className={styles.GPIO17}/>
      <img src={rpi}/>
    </div>
  );
}

componentDidMount() {
  this.myInterval = setInterval(() => {
    gpio4_image=getImage(gpio4);
    gpio17_image=getImage(gpio17);
    console.log(gpio4);
    this.setState(state => ({ open: !state.open }))
  },5000)
}

componentWillUnmount() {
  clearInterval(this.myInterval)
}

}

ReactDOM.render(<App />, document.getElementById('app'));
