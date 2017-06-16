// React
import React, { Component } from 'react';

// Components
import Button from '../Button/Button';

// CSS
import './SourceFrame.css';



// <SourceFrame /> Component
export class SourceFrame extends Component {

	render() {
		debugger;
		return (
			<div className="source-frame">
				<Button text="&times;" callBack={this.props.closeSourceFrame} title="Close" />
				<div className="source-frame__frame">
					<img src={this.props.source} alt={this.props.sourceTitle}/>
				</div>
			</div>

		);

	};

};



export default SourceFrame;