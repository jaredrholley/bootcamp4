import React from 'react';

class BuilingList extends React.Component {
	
	showInfo(id) {
		//console.log(id);
		this.props.onChange(id);
	}

	deleteListing(id) {
		this.props.data.splice(id, 1);
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
					<button variant="secondary" size="sm" onClick={() => {this.deleteListing(relativeID)}}>X</button>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
