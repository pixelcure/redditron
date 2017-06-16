// React
import React, { Component } from 'react';

// Components
import Button from '../Button/Button';

// CSS
import './FeedControl.css';



// <FeedControl /> Component
export class FeedControl extends Component {

	constructor(props){
		super(props);
	
		this.state = {
			showSearch : false
		};

		// Bind - On Board Title Click()
		this.toggleSearch = this.toggleSearch.bind(this);
		// Bind - Handle Search Query
		this.handleSearchQuery = this.handleSearchQuery.bind(this);
	};

	// Toggle Search Field
	toggleSearch(e) {
		
		if(e.currentTarget.type !== undefined){
			e.stopPropagation();
		 	return false;
		};

		this.state.showSearch ? 
		this.setState({
			showSearch : false
		}) :
		this.setState({
			showSearch : true
		});

	};

	// Handle Search Query
	handleSearchQuery(e) {
		console.log(e.currentTarget.value);
		// refresh feed with value
		return this.props.refreshFeed(e.currentTarget.value);
	};

	render() {

		// Tab control
		const tabControl = () => {
			
			// render radio
			let renderRadio = (el, index) => {

				// Turn tab to string
				let tab = el.toString();

				return (
					<fieldset key={index} className="tabControl__option">
						<input 
							checked={tab === this.props.tab ? 'checked' : ''} 
							name="tabMode" data-value={tab} 
							onChange={this.props.toggleTab} 
							type="radio" 
							id={tab}
							value={tab} />
						<label htmlFor={tab}>{tab}</label>
					</fieldset>
				);
			};

			// render form
			return(
				<form>
					{this.props.tabs.map(renderRadio)}
				</form>
			);

		};

		// NSFW control
		const nsfwControl = () => {
			return(
				<form>
					<fieldset>
						<input
						  name="nsfwToggle"
						  id="nsfwToggle" 
						  type="checkbox"
						  value={this.props.nsfw}
						  defaultChecked={this.props.nsfw}
						  onChange={this.props.toggleNsfw} />
						<label htmlFor="nsfwToggle">nsfw</label>
					</fieldset>
				</form>
			);
		};

		// Render Board Toggle
		const renderBoardToggle = () => {

			// If show search box true, show it, else show board name
			if(this.state.showSearch){
				return (
					<div className="feed-control__searchBoard">
						<form className="searchBoard__search" onSubmit={() => this.handleSearchQuery}>
							<input type="text" onChange={this.handleSearchQuery} />
							<span className="search__cancel" title="Cancel Search" onClick={this.toggleSearch}>
								&times;
							</span>
						</form>
						<Button 
							text="search"
							iconClass={`icon-search`}
							cssClass={`button--search boardToggle__search`}
							noText={true}
						/>
					</div>
				)
			} else {
				return (
					<div className="feed-control__boardToggle" >
						<div className="boardToggle__title" onClick={this.toggleSearch}>
							<span>/r/</span>{this.props.subreddit}
						</div>
						<Button 
							text="Refresh"
							iconClass={`icon-refresh`}
							cssClass={`button--refresh boardToggle__refresh`}
							noText={true}
							callBack={this.props.refreshFeed} 
						/>
					</div>
				)
			}
		};

		// Render
		return (
			<div className="feed-control">
				<div className="feed-control__tabsToggle">
					<div className="feed-control__tabControl">
						{tabControl()}
					</div>
				</div>
				{ renderBoardToggle() }
				{ nsfwControl() }
			</div>
		);
	};

};



export default FeedControl;