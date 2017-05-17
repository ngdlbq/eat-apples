import React from 'react'
import { render } from 'react-dom'
import thunk from 'redux-thunk'
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'
import AppleBasketConnect from './containers/AppleBasket'
import AnimalConnect from './containers/Animal'

const store = createStore(reducers,applyMiddleware(thunk));

render(
	<Provider store={store}>
		<div>
			<AppleBasketConnect />
			<AnimalConnect />
		</div>
	</Provider>,
	document.querySelector('#app')
);
