import React, { Component } from 'react';
const request = require('request');

class App extends Component {
	constructor(props) {
		super(props);



		
	}

	getLatitudeAndLongitudeFromZip() {
		request({
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=80204`,
			json: true
		}, (error, response, body) => {
			if (error) {
				console.log(error);
			} else {
				console.log('LATITUDE: ', body.results[0].geometry.location.lat);
				console.log('LONGITUDE ', body.results[0].geometry.location.lng);
			}
		});
	}
	
	render() {
    return (
      <div className="App">
				<button onClick={this.getLatitudeAndLongitudeFromZip}>BUTTON</button>
      </div>
    );
  }
}

export default App;