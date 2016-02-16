import React from 'react';
import ReactDOM from 'react-dom';
import ShowText from './show_text.jsx';

class Input extends React.Component {
	constructor() {
		super();
		this.state = {
			text: 'type here...'
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		e.preventDefault();
		this.setState({
			text: e.target.value
		});
	}
	render() {
		return(
			<div>
				<form>
					<input type="text" value={this.state.text} onChange={this.handleChange} />
					<ShowText passedDownText={this.state.text} />
				</form>
			</div>
			)
	}
}

module.exports = Input;