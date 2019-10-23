import React from 'react';

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {text: ''};

		this.filterUpdate = this.filterUpdate.bind(this);
	}


	filterUpdate(event) {
		//Here you will need to update the value of the filter with the value from the textbox
	
		this.setState({text: event.target.value});
		this.props.onChange(event.target.value); // This connect to the parent that waits for the onChange
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
			<form>
				<input type="text" placeholder="Type to Filter" value={this.state.value}
				 onChange = {this.filterUpdate} />
			</form>
		);
	}
}
export default Search;
