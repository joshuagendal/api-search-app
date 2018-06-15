import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../index';
import * as actionTypes from '../store/actions';
// import addZipcode from '../store/reducer'
import Searchbar from './Searchbar';
import reducer from '../store/reducer';
const request = require('request');


const API_KEY = 'AIzaSyBWMur-FR4QMJB-SlPMi5fGBlBo0wQbMBc';

class App extends Component {
	// constructor(props) {
	// 	super(props);
		
	// 	// this.zipcodeInput = React.createRef();
	// 	// this.handleGetLatitudeAndLongitudeFromZipSubmit = this.handleGetLatitublueweAndLongitudeFromZipSubmit.bind(this);

	// }

	componentDidMount() {
		console.log(store.getState())
	}

	// handleGetLatitudeAndLongitudeFromZipSubmit() {
	// 	const zipcode = this.zipcodeInput.current.value;
	// 	request({
	// 		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${API_KEY}`,
	// 		json: true
	// 	}, (error, response, body) => {
	// 		if (error) {
	// 			console.log(error);
	// 		} else if (body.status === 'ZERO_RESULTS') {
	// 			console.log('ZERO RESULTS. PLEASE TRY SEARCH AGAIN');
	// 		} else {
	// 			console.log('RESPONSE STATUS: ', body.status)
	// 			console.log('LAT: ', body.results[0].geometry.location.lat);
	// 			console.log('LONG: ', body.results[0].geometry.location.lng);
	// 		}
	// 	});
	// }
	render() {
		return (
			<div>
				<h1>ENTER ZIP</h1>
				<input type="text" name="zipcode" ref={this.zipcodeInput} />

				<button onClick={ () => store.dispatch({
					type: actionTypes.ADD_ZIPCODE,
					text: '11111'
				})}>SUBMIT</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		zipcode: state.zipcode
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addZipcode: (text) => dispatch({type: actionTypes.ADD_ZIPCODE})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// return (
//   <div className="App">
//     <Searchbar getLatitudeAndLongitudeFromZip={zipcode => {this.getLatitudeAndLongitudeFromZip(zipcode)}} />
//   </div>
// );