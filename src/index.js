import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../src/components/App';
import reducer from './store/reducer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

export default store;

console.log(store.getState());

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
