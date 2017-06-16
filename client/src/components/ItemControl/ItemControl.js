// React
import React, { Component } from 'react';

// Components
import Button from '../Button/Button';

// Util
import { timeConverter } from '../../util/util';

// CSS
import './ItemControl.css';



// <ItemControl /> Component
export class ItemControl extends Component {

	render() {

		// Render add favorite button
		const renderFavButton = () => {
			return(
				<li className="list__clean item-control__control">
					<Button
						text={`Add to Favorites`}
						noText={true}
						iconClass={`icon-heart`}
						id={this.props.id}
						cssClass={`button--heart`}
						callBack={this.props.addFavorite}
					/>
				</li>
			);
		};

		// Render delete fav button
		const renderTrashButton = () => {
			return(
				<li className="list__clean item-control__control" data-item-id={this.props.id}>
					<Button 
						text={`Delete from Favorites`}
						noText={true}
						iconClass={`icon-bin`}
						id={this.props.id}
						cssClass={`button--bin`}
						callBack={this.props.handleFavRemove}
					/>
				</li>
			);
		};

		// Render favorite button
		const handleFavOrDelete = () => {

			// See if we have this in our favorites, if we do, render an option to delete it
			const findFav = this.props.favorites.find((fav) => fav.data.id === this.props.id ? true : false);
				
			// If it found an array, render trash button, otherwise add fav button
			findFav !== undefined ? renderTrashButton() : renderFavButton();

		};

		return (
			<div className="table">

				<ul className="table__cell author-details item-control list">
					<li className="list__clean item-control__control">
						<a 
							className="author"
							href={`http://www.reddit.com/user/${ this.props.author }/submitted`} 
							target="_blank" 
							title={`View more from ${ this.props.author }`}
						>
							<span className="icon-user"></span>
							{ this.props.author }
						</a>
					</li>
					<li className="list__clean item-control__control">
						<Button 
							text={`View Source`}
							noText={true}
							id={this.props.id} 
							callBack={this.props.viewSourceFrame} 
							source={this.props.source} 
							cssClass={`button--source`} 
							iconClass={`icon-share`}
						/>
					</li>
					{ this.props.view === 'root' ? handleFavOrDelete() : renderTrashButton() }
				</ul>

				<ul className="table__cell popularity list">					
					<li className="list__clean">
						{ timeConverter(this.props.created) }
					</li>
					<li className="list__clean">
						<span className="icon-arrow-up"></span>
						{this.props.ups}
					</li>
					<li className="list__clean">
						<span className="icon-arrow-down"></span>
						{this.props.downs}
					</li>
				</ul>

			</div>
		);
	}

};



export default ItemControl;