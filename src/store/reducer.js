import * as actionTypes from './actions';

const initialState = {
	zipcode: ''
};

// const addZipcode = (text) => {
// 	return {
// 		type: actionTypes.ADD_ZIPCODE,
// 		text
// 	}
// }

// export default addZipcode;

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_ZIPCODE: 
			const zip = action.text;
			// console.log(...state)
			return {
				...state,
				zipcode: zip,
			}
		default:
			return state;
	}
};

export default reducer;