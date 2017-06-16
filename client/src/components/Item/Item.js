// React
import React, { Component } from 'react';

// Components
import ItemControl from '../ItemControl/ItemControl';
import MessageBox from '../MessageBox/MessageBox';

// CSS
import './Item.css';



// <Item /> Component
export class Item extends Component {

	constructor(props){
		super(props);

		this.state = {
			favToDelete : null,
			messageBoxVisible : false
		}

		// Bind - handleFavRemove()
		this.handleFavRemove = this.handleFavRemove.bind(this);
		// Bind - closeMessageBox()
		this.closeMessageBox = this.closeMessageBox.bind(this);
	};

	// Handle fav remove and confirmation
	handleFavRemove(e) {
		
		// Fav ID
		const { id } = e.currentTarget.dataset;

		// Depending on current target, either update fav to delete,
		// or, it's a confirmation and we'll delete the fav stored in local state
		let confirming = e.currentTarget.parentElement.parentElement.classList.contains('messageBox__inner');

		if(confirming){

			// remove favorite
			this.props.removeFavorite(e);

			// update state, fav deleted.
			this.setState({
				favToDelete : null
			});
			
		} else {

			// update local state to store cached fav to delete, 
			// then confirm with user to actually delete
			this.setState({
				favToDelete : id,
				messageBoxVisible : true
			});
			
		};

	};

	closeMessageBox(e){

		// Set state, toggle nsfw
		this.setState({
			messageBoxVisible : false,
			favToDelete : null
		});

	};

	render() {

		// Render message box
		const renderMessageBox = () => {
			
			// do we have a fav id cached and does it match the prop id?
			// if so, make sure message box visible is true and render
			const confirm = (this.state.favToDelete !== null) && 
							(this.props.id === this.state.favToDelete) && 
							(this.state.messageBoxVisible);
			
			// render
			if(confirm){
				return(
					<MessageBox
						closeMessageBox={this.closeMessageBox}
						messageBoxText={`Are you sure you want to delete ${this.props.tite}?`}
						callBack={this.handleFavRemove}
						showButton={true}
						buttonText={`yes`}
						id={this.props.id}
					/>
				);
			};

		};

		return (
			<div className="item">
				{ renderMessageBox() }
				<h2>{this.props.title.replace('&amp;', '&')}</h2>
				<img src={this.props.thumbnail} alt={this.props.title} title={this.props.title} />
				<ItemControl
					id={this.props.id}
					author={this.props.author}
					created={this.props.created}
					source={this.props.souce}
					viewSourceFrame={this.props.viewSourceFrame}
					addFavorite={this.props.addFavorite}
					removeFavorite={this.props.removeFavorite}
					ups={this.props.ups}
					downs={this.props.downs}
					view={this.props.view}
					handleFavRemove={this.handleFavRemove}
				/>
			</div>
		);
	};

};



export default Item;