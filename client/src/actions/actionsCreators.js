// You can think of an ACTION as something that happens
// in your application.


// Whenever something happens, the action is DISPATCHED,
// and it keeps two things, the TYPE of action, and the
// PAYLOAD of information that is needed.
// Example, which comment got deleted, what photo was just liked

// Anything you fire off an action, or dispatch an action
// with Redux Devtools, you can "Time travel" and see different
// actions that have been dispatched throughout your state

// On the other end, a reducer takes care of actually updating and
// handling the action.


// If there are a lot of actions, it's common to break
// them out into multiple files. Since we only have a few,
// we will use one file.


// Actions are just objects that have two things, the TYPE, and some
// type of payload. 


// Why do we call them action creator?
// The action creator puts everything together to dispatch
// and access later on. We do this with "Reducers"


// add fav
export function addFav(payload){
	return {
		type : 'ADD_FAV',
		payload
	};
};

// load feed
export function loadFeed(payload){
	return {
		type : 'LOAD_FEED',
		payload
	};
};

// load favorites
export function loadFavorites(payload){
	return {
		type : 'LOAD_FAVORITES',
		payload
	};
};

// remove favorites
export function removeFav(index){
	return {
		type : 'REMOVE_FAV',
		index
	};
};

// nav open?
export function navOpen(payload){
	return {
		type : 'NAV_OPEN',
		payload
	};
};