// React
import React, { Component } from 'react';

// CSS
import './Button.css';



// <Button /> Component
export class Button extends Component {

	render() {
		return (
			<button 
				data-id={this.props.id ? this.props.id : ''} 
				className={`button${this.props.cssClass ? ' ' + this.props.cssClass : ''}`} 
				onClick={this.props.callBack} 
				title={this.props.text}
			>
				<span className={`button__text${this.props.iconClass !== undefined ? ' ' + this.props.iconClass : ''}`}>
					{!this.props.noText ? this.props.text : ''}
				</span>
			</button>
		);
	}

};



export default Button;