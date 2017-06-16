// React
import React, { Component } from 'react';

// CSS
import './MessageBox.css';

// Components
import Button from '../Button/Button';



// <MessageBox /> Component
export class MessageBox extends Component {

	render() {

		// render button
		const renderButton = () => {
			return (
				<Button text={this.props.buttonText} id={this.props.id !== undefined ? this.props.id : '' } callBack={this.props.callBack} />
			);
		};

		// close message box button
		const renderCloseHandler = () => {
			return (
				<a className="inner__close" href="#" onClick={this.props.closeMessageBox}>
					{ this.props.showButton ? ` or cancel` : ` close` }
				</a>
			)
		};

		return (
			<div className="messageBox">
				<div className={`messageBox__inner`}>
					<p className={`inner__text`}>
						{ this.props.messageBoxText }				
						{ this.props.showButton ? renderButton() : '' }
						{ renderCloseHandler() }
					</p>
				</div>
				<div className="messageBox__mask"></div>
			</div>
		);
	}

};



export default MessageBox;