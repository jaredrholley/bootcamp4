import React from 'react';

class BuilingList extends React.Component {
	
	render() {

		console.log('This is my filter text', this.props.filterText);

		const input = this.props.filterText.toLowerCase();

		var data = this.props.data.filter((building) => { return (!building.name.toLowerCase().indexOf(input))});

		const buildingList = data.map(directory => {
			return (
				<tr key={directory.id}>
					<td>{directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
