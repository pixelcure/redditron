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

		// Render favorite button
		const renderFavControl = () => {

			// only render "fav" button on root, not favs
			if(this.props.view === 'root'){
				return(
					<li className="list__clean">
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
			} else {
				return(
					<li className="list__clean item-control__control" data-item-id={this.props.id}>
						<Button 
							text={`delete`}
							noText={true}
							iconClass={`icon-bin`}
							id={this.props.id}
							cssClass={`button--bin`}
							callBack={this.props.handleFavRemove}
						/>
					</li>
				);
			}

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
					{ renderFavControl() }
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