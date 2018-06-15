import React, { Component } from 'react';
import Searchbar from './Searchbar';
const request = require('request');

class App extends Component {
	constructor(props) {
		super(props);
		
		this.zipcodeInput = React.createRef();
		this.handleGetLatitudeAndLongitudeFromZipSubmit = this.handleGetLatitudeAndLongitudeFromZipSubmit.bind(this);

	}

	handleGetLatitudeAndLongitudeFromZipSubmit() {
		console.log(this.zipcodeInput.current.value);
		const zipcode = this.zipcodeInput.current.value;
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
			<div>
				<h1>ENTER ZIP</h1>
					<input type="text" name="zipcode" ref={this.zipcodeInput} />

					<button type="submit" onClick={this.handleGetLatitudeAndLongitudeFromZipSubmit}>SUBMIT</button>
			</div>
		);
	}
}

export default App;

// return (
//   <div className="App">
//     <Searchbar getLatitudeAndLongitudeFromZip={zipcode => {this.getLatitudeAndLongitudeFromZip(zipcode)}} />
//   </div>
// );