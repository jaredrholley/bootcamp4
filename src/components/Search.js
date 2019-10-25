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
				<div class="md-form active-cyan active-cyan-2 mb-3">
				<input class="form-control" type="text" placeholder="Type to Filter" value={this.state.value}
				 onChange = {this.filterUpdate} aria-label="Search"></input>
			    </div>
			</form>
		);
	}
}
export default Search;
