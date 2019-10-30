import React from 'react';

class BuilingList extends React.Component {
	
	showInfo(id) {
		//console.log(id);
		this.props.onChange(id);
	}

	deleteListing(id) {
		
		var index = this.props.data.indexOf(id);
		this.props.data.splice(index, 1);

		this.forceUpdate();
	}

	render() {

		//console.log('This is my filter text', this.props.filterText);

		const input = this.props.filterText.toLowerCase();

		//console.log(this.props.data);

		var data = this.props.data.filter((building) => {
			
			if (building.name != null) {
				return (!building.name.toLowerCase().indexOf(input))
			}
				return false;
			});

		const buildingList = data.map((directory, relativeID) => {
			return (
				<tr key={directory.id} >
					<td onClick={() => this.showInfo(directory.id)}>{directory.code} </td>
					<td onClick={() => this.showInfo(directory.id)}> {directory.name} </td>
					<button variant="secondary" size="sm" onClick={() => {this.deleteListing(directory)}}>X</button>
				</tr>
			);
		});


		
		return (
		<div class="table-responsive">
		<table class="table">
		  <thead>
			<tr>
			  <th scope="col">Building Code</th>
			  <th scope="col">Building Name</th>
			  <th scope="col">Remove Listing</th>
			</tr>
		  </thead>
		  <tbody>
			{buildingList}
		  </tbody>
		  </table>
		  </div>);
	}
}
export default BuilingList;
