import React from 'react';
import ReactDOM from 'react-dom';

class ShowText extends React.Component {
	render() {
		return (
			<div>{this.props.passedDownText}</div>
			)
	}
}

module.exports = ShowText;