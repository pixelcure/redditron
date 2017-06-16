// Deps
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, history } from 'react-router-dom'
// import browserHistory from 'history/createBrowserHistory';

// CSS
import './styles/index.css';

// Helpers and some random data
import { 
	getRandomNum,
	shuffle,
	randomBoards,
	randomNsfwBoards,
	navItems, 
	tabs
} from './util/util';

// Components
import Feed from './components/Feed/Feed';
import SourceFrame from './components/SourceFrame/SourceFrame';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavMenu from './components/NavMenu/NavMenu';
import MessageBox from './components/MessageBox/MessageBox';

// Redux Provider, Store
// import { Provider } from 'react-redux';
// import store, { history } from './store';



// <Root /> Component
export class Root extends Component {

	constructor(props){
		super(props);

		// State
		this.state = {
			favorites : localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [],
			feed : null,
			nsfw : false,
			loading : false,
			randomBoards,
			randomNsfwBoards,
			subreddit : null,
			source : null,
			sourceTitle : null,
			sourceObj : null,
			limit : 20,
			navOpen : true,
			navItems,
			viewingSourceFrame : false,
			tab : 'top',
			tabs,
			error : false,
			errorMessage : '',
			messageBoxVisible : false,
			randomize : false
		};

		// Bind - removeFavorite
		this.removeFavorite = this.removeFavorite.bind(this);
		// Bind - addFavorite
		this.addFavorite = this.addFavorite.bind(this);
		// Bind - refreshFeed
		this.refreshFeed = this.refreshFeed.bind(this);
		// Bind - viewSourceFrame
		this.viewSourceFrame = this.viewSourceFrame.bind(this);
		// Bind - closeSourceFrame
		this.closeSourceFrame = this.closeSourceFrame.bind(this);
		// Bind - toggleTab
		this.toggleTab = this.toggleTab.bind(this);
		// Bind - toggleNsfw
		this.toggleNsfw = this.toggleNsfw.bind(this);
		// Bind - closeMessageBox
		this.closeMessageBox = this.closeMessageBox.bind(this);

	};

	componentWillMount(){

		// Refresh Feed
		this.refreshFeed();
	
	};
	
	refreshFeed(sub) {
		
		let subreddit;

		// If we don't have a specifc subreddit to pull from, randomize it
		if(sub === undefined || typeof sub !== 'string'){

			// clean state
			this.setState({ subreddit : '' })

			// Nsfw Boards
			let nsfwBoards = this.state.randomNsfwBoards;

			// Random Boards
			let randomBoards = this.state.randomBoards;

			// Concat, or store board based on state, and shuffle them up!
			let boards = this.state.nsfw ? [].concat(shuffle(nsfwBoards), shuffle(randomBoards)) : shuffle(randomBoards);

			// Generate Random Subreddit
			subreddit = boards[getRandomNum(0, boards.length)];

		} else {

			subreddit = sub;

		}


		// Set State, Loading
		this.setState({
			loading : true,
			subreddit
		});

		// url template
		let url = `/feed?subreddit=${subreddit}&limit=${this.state.limit}&tab=${this.state.tab}`;

		// fetch - get
		fetch(url, { method : 'get' })
		// to json
		.then(res => res.json())
		// make sure we have results, if not lets repull
		.then(res => {
			return res.data.children.length > 0 ? res : '';
		})
		// set state
		.then((res) => {

			// Update state with returned feed data
			this.setState({
				feed : res.data.children,
				loading : false
			});

		})
		.catch((err) => {
			if(!err.response === 404)
			// Message the error
			this.setState({
				error : true,
				errorMessage : err.toString()
			});

			return err;
		});

	};

	addFavorite(e) {

		// Current target deconstruct for id
		const { id } = e.currentTarget.dataset;

		// Filter through data to find item by id in favorites to not double add
		const dup = this.state.favorites.find( val => val.data.id === id );
		
		if(dup === undefined){

			// Filter through data to find item by id
			const fav = this.state.feed.filter( val => val.data.id === id ? true : false );
			
			// concat favorites with new one at the top
			let favorites = [].concat(fav, this.state.favorites);

			// Set favorites state
			this.setState({
				favorites
			});

			// Update key "favorites" in local storage
			localStorage.setItem('favorites', JSON.stringify(favorites));

		} else {
			this.setState({
				error : true,
				errorMessage : 'This post is already saved to your favorites list! 😂'
			})
		}

	};

	removeFavorite(e) {
		
		// Current target deconstruct for id
		const { id } = e.currentTarget.dataset;

		// Index of removed favoite
		let i;
		
		// Filter through data to find item by id
		this.state.favorites.find( (el, index) => {
			// Set i to index if id's match
			return (el.data.id === id) ? i = index : '';
		});

		// Create new fav list
		const newFavs = [
			...this.state.favorites.slice(0, i), // before
			...this.state.favorites.slice(i + 1) // after
		];

		// Update favorites state
		this.setState({
			favorites : newFavs
		});

		// Update key "favorites" in local storage
		localStorage.setItem('favorites', JSON.stringify(newFavs));

	};

	viewSourceFrame(e){
		
		// ID to find data
		let { id } = e.currentTarget.dataset;
		
		// Concat data
		var data = [].concat(this.state.feed, this.state.favorites);
		
		// Find our id in the data to pull source URL from that object
		const source = data.filter( val => val.data.id === id ? true : false );

		// If it isn't an imgur link, or html page, load the image in the SourceFrame component
		if( (!/imgur/.test(source[0].data.url)) && (!/.html/.test(source[0].data.url)) ){
			
			// Set state, viewing source
			this.setState({
				loading : true,
				viewingSourceFrame : true,
				source : source[0].data.url,
				sourceTitle : source[0].data.title,
				sourObj : source[0].data
			});

		} else {
			// Otherwise, just open it in a new window
			window.open(source[0].data.url);
		};

	};

	closeSourceFrame(e){

		// Set state, viewing source
		this.setState({
			viewingSourceFrame : false,
			loading : false,
			source : null,
			sourceTitle : null
		});

	};

	toggleTab(e){

		// Set state, toggle tab
		this.setState({
			tab : e.currentTarget.value
		});

		// Refresh feed with new tab
		this.refreshFeed();

	};

	toggleNsfw(e){

		// Set state, toggle nsfw
		this.setState({
			nsfw : e.currentTarget.checked
		});

		// Refresh feed with new chosen nsfw mode
		this.refreshFeed();

	};

	closeMessageBox(e){

		// Set state, toggle nsfw
		this.setState({
			messageBoxVisible : false,
			error : false,
			errorMessage : ''
		});

	};

	render() {

		// Render Feed
		const renderFeed = () => {
			return (
				<Feed 
					cssOuterClass={`feed`}
					feed={this.state.feed}
					favorites={this.state.favorites}
					addFavorite={this.addFavorite}
					refreshFeed={this.refreshFeed}
					viewSourceFrame={this.viewSourceFrame}
					closeSourceFrame={this.closeSourceFrame}
					subreddit={this.state.subreddit}
					tabs={this.state.tabs}
					tab={this.state.tab}
					toggleTab={this.toggleTab}
					nsfw={this.state.nsfw}
					toggleNsfw={this.toggleNsfw}
					view={`root`}
					loading={this.state.loading}
					closeMessageBox={this.closeMessageBox}
				/>
			);
		};

		// Render Favorites
		const renderFavorites = () => {
			return(
				<Feed
					cssOuterClass={`favorites`}
					favorites={this.state.favorites} 
					removeFavorite={this.removeFavorite}
					viewSourceFrame={this.viewSourceFrame}
					closeSourceFrame={this.closeSourceFrame}
					view={`favorites`}
					closeMessageBox={this.closeMessageBox}
				/>
			);
		};

		// View Source
		const renderSourceFrame = (e) => {
			return(
				<SourceFrame 
					source={this.state.source}
					sourceObj={this.state.sourceObj}
					sourceTitle={this.state.sourceTitle}
					closeSourceFrame={this.closeSourceFrame}
				/>
			);
		};

		// Render Message Box
		const renderMessageBox = () => {
			return(
				<MessageBox
					closeMessageBox={this.closeMessageBox}
					messageBoxText={this.state.errorMessage}
				/>
			);
		};

		// Render Router and App Bounds
		return(
			<Router history={history}>
			    <section className="bounds">
		    		{ this.state.error ? renderMessageBox() : null }

			    	<div className="bounds__inner">
				    	<NavMenu navItems={this.state.navItems} favorites={this.state.favorites} />
				    	<Header navOpen={this.state.navOpen} />
				    	<div className={`inner__content${this.state.navOpen ? ' inner__content--header-visible' : ''}`}>
		    				{ this.state.viewingSourceFrame ? renderSourceFrame() : '' }
					    	<Switch>
								<Route exact path="/">
									{ renderFeed() }
								</Route>
								<Route exact path="/favorites">
									{ renderFavorites() }
								</Route>
								<Route component={NotFound}/>
							</Switch>
				    	</div>
			    		<Footer />
			    	</div>

				</section>
			</Router>
		);

	};

};



// Render DOM
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);