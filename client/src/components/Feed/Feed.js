// React
import React, { Component } from 'react';

// Components
import Item from '../Item/Item';
import FeedControl from '../FeedControl/FeedControl';
import Loading from '../Loading/Loading';

// CSS
import './Feed.css';



// <Feed /> Component
export class Feed extends Component {

	constructor(props) {
		super(props);

		// Local state
		this.state = {
			loading : props.loading
		};

	};

	render() {

		// Clean items func to test if we're rendering favorites or a random board feed
		const items = () => {
			// if feed exists, return
			if(this.props.feed !== null && this.props.feed !== undefined) return this.props.feed;
			// if favs exists, return
			if(this.props.favorites !== null && this.props.favorites !== undefined) return this.props.favorites;
			// otherwise, we don't have items yet
			else return null;
		};

		// Render Data
		const renderItems = (el, index) => {

			// Things we need from the date we are passed (favs or pulled data)
			const { 
				id, 
				thumbnail, 
				title, 
				author, 
				url,
				ups,
				downs,
				created
			} = el.data;
			
			// If this is an image
			if(thumbnail !== '' && thumbnail !== 'default'){
				
				return(
					<li className="feed__item" key={id} data-key={id} data-index={index}>
						<Item
							id={id}
							addFavorite={this.props.addFavorite}
							removeFavorite={this.props.removeFavorite}
							favorites={this.props.favorites}
							thumbnail={thumbnail}
							title={title}
							author={author}
							source={url}
							ups={ups}
							downs={downs}
							created={created}
							viewSourceFrame={this.props.viewSourceFrame}
							closeSourceFrame={this.props.closeSourceFrame}
							view={this.props.view}
							closeMessageBox={this.props.closeMessageBox}
						/>
					</li>
				);
			};

		};

		// Render subreddit Type
		const renderFeedControls = () => {
			
			// Subreddit board
			return(
				<FeedControl
					refreshFeed={this.props.refreshFeed}
					subreddit={this.props.subreddit}
					tabs={this.props.tabs}
					tab={this.props.tab}
					toggleTab={this.props.toggleTab}
					nsfw={this.props.nsfw}
					toggleNsfw={this.props.toggleNsfw}
					view={this.props.view}
				/>
			);

		};

		// Render Feed
		const renderFeed = () => {

			// Feed List
			return(
				<ul className="feed">	
					{ this.props.feed !== null ? items().map(renderItems) : '' }
				</ul>
			);
		
		};

		// Render Loader
		const renderLoader = () => {
			return (
				<Loading />
			);
		};

		return (
			<section className={this.props.cssOuterClass}>
				{ this.props.view === 'root' ? renderFeedControls() : '' }
				{ this.props.loading ? renderLoader() : renderFeed() }
			</section>
		);

	};

};



export default Feed;