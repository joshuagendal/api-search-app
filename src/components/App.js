import React, { Component } from 'react';
import Searchbar from './Searchbar';
const request = require('request');

class App extends Component {
	constructor(props) {
		super(props);

	}

	getLatitudeAndLongitudeFromZip(zipcode) {
		request({
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}`,
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
        <Searchbar getLatitudeAndLongitudeFromZip={zipcode => {this.getLatitudeAndLongitudeFromZip(zipcode)}} />
      </div>
    );
  }
}

export default App;
