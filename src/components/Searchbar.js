import React from 'react';

const Searchbar = (props) => {
	
	let zipcodeTranslation = (zipcode) => {
		props.getLatitudeAndLongitudeFromZip(zipcode);
	}
	
	return (
		<div>
			<h1>ENTER ZIP</h1>
			<input
				type="text" 
				onChange={event => zipcodeTranslation(event.target.value)} />		
		</div>

	);
}

export default Searchbar;