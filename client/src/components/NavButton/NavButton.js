// Deps
import React, { Component } from 'react';

// CSS
import './NavButton.css'



// <NavButton /> Component
class NavButton extends Component {
	
	constructor() {
		super()

		this.toggleHeader = this.toggleHeader.bind(this);
	}

	toggleHeader() {
		this.store.dispatch({
			type : 'NAV_STATUS',
			navStatus : this.props.navStatus ? false : true
		});
	};

	render() {

		if(this.props.showNav){
			return (
				<span onClick={this.toggleHeader} className="nav-button close-nav">&times;</span>
			);
		};

		return (
			<ul onClick={this.toggleHeader} className={`list list__clean nav-button${this.props.showNav ? ' active' : ''}`}>
			    <li className="line"></li>
			    <li className="line"></li>
			    <li className="line"></li>
			</ul>
		);
	};
	
};



export default NavButton;