// Deps
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavButton from '../NavButton/NavButton';

// CSS
import './Header.css'


// <Header> Element
class Header extends Component {
    


	render() {

		const renderNavButton = () => {
			if(!this.props.navOpen) {
				return(
					<NavButton {...this.props}/>
				)
			};
		};

	    return (
	      <header className="header">
	    	<Link className={`logo${this.props.navOpen ? ' nav-visible' : ''}`} to="/">
	    		Reddit<span>tron</span>
	    	</Link>
			{ renderNavButton() } 
	      </header>
	    );

	};
};

export default Header;
