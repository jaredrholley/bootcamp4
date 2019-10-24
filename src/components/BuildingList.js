import React from 'react';

class BuilingList extends React.Component {
	
	showInfo(id) {
		console.log(id);
		this.props.onChange(id);
	}

	render() {

		console.log('This is my filter text', this.props.filterText);

		const input = this.props.filterText.toLowerCase();

		var data = this.props.data.filter((building) => { return (!building.name.toLowerCase().indexOf(input))});

		const buildingList = data.map(directory => {
			return (
				<tr key={directory.id} onClick={() => this.showInfo(directory.id)}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
					<button variant="secondary" size="sm">X</button>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
