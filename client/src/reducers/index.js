import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
function feed(state = {}, action) {
	switch(action.type){
		case 'LOAD_FEED' : 

		// return updated state
		console.log('loading feed');
		console.log(state.feed);

		// return [
		// 	...state.slice(0, i), // before the one we are updating (we aren't changing them so it's fine)
		// 	{...state[i], likes : state[i].likes + 1}, // the current one
		// 	...state.slice(i + 1) // after the one we are updating (we aren't changing them so it's fine)
		// ]
		break;
		
		default : 
			return state;
	}
};

function favorites(state = {}, action) {
	switch(action.type){
		case 'LOAD_FAVORITES' : 

		// return updated state
		console.log('favorites');

		// return [
		// 	...state.slice(0, i), // before the one we are updating (we aren't changing them so it's fine)
		// 	{...state[i], likes : state[i].likes + 1}, // the current one
		// 	...state.slice(i + 1) // after the one we are updating (we aren't changing them so it's fine)
		// ]
		break;

		default : 
			return state;
	}
};

function navOpen(state = {}, action) {
	console.log(action);
	return { ...state, navOpen : action.navOpen  }
};



// Creates one main reducer, which then redux handles.
// We need to also send them the routing, and the changes, and history.
// This way it all gets stores into our state.
const rootReducer = combineReducers({
	feed, favorites, navOpen, routing : routerReducer
});

export default rootReducer;

