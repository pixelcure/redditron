// Deps
import { createStore, /*compse*/ } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import browserHistory from 'history/createBrowserHistory';
import { getRandomNum } from './util/util';

// import root reducer
import rootReducer from './reducers/index';



// Random Subreddits
const randomSubs = ['pics', 'nyc', 'gifs', 'art', 'analog']

// Pull Reddit posts
const feed = fetch(`/feed?type=${randomSubs[getRandomNum(0, randomSubs.length)]}`, {
	method : 'get'
}).then(res => res.json()).then(res => res).catch(err => console.log(err));

// You can think of a store as an empty database, or an object where we will keep all our information.

// create an ojbect for the default data, allowed to not pass key since key/var name same. (es6 feature)
const defaultState = {
	favorites : [],
	feed,
	navOpen : false
};

// Create new history object to be passed into the router
const appbrowserHistory = browserHistory();

// store takes two things, a root reducer, as a well as a default state
const store = createStore(rootReducer, defaultState);

// History, this is kept track by the router, and we ar weaving in the store, to be accessible
export const history = syncHistoryWithStore(appbrowserHistory, store);



export default store;