// Deps
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// CSS
import './NavMenu.css'



// <NavMenu /> Component
class NavMenu extends Component {
    
	render() {
		
		// Render <NavLink />
		const renderNavItems = (el, index) => {

			if(el.to=== 'favorites'){
				return (
					<li key={index}>
						<Link to={`/${el.to}`}>
							<span className="fav-count icon-heart">
								{this.props.favorites.length}
							</span>
						</Link>
					</li>
				);
			} else {
				return (
					<li key={index}>
						<Link to={`/${el.to}`}>
							<span>{el.text.toString()}</span>
						</Link>
					</li>
				);
			}

		};

	    return (
	    	<div className="nav-outer">
		      	<nav className="nav">
		      		<ul>
		      			{this.props.navItems.map(renderNavItems)}
		  			</ul>
		  		</nav>
	    	</div>
	    );

	};
	
};



export default NavMenu;