import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		var headerInfo;
		var buildingInfo = "";

		if (this.props.selectedBuilding !== 0) {
			buildingInfo = this.props.data.find((building) => { return (building.id === this.props.selectedBuilding) } );
			headerInfo = <b>{buildingInfo.name}</b>
		}
		else 
		{
			headerInfo = <i>Click on a name to view more information</i>

			return (
				<div>
					<p>
						{' '}
						<h3>{headerInfo}</h3>
					</p>
				</div>
			);

		}

		return (
			<div>
				<p>
					{' '}
					<h3>{headerInfo}</h3>
					<td>Building Code :  {buildingInfo.code}</td><br/>
					<td>Address : {buildingInfo.address}</td><br/>
					<td>Latitude : {buildingInfo.coordinates.latitude}</td><br/>
					<td>Longitude : {buildingInfo.coordinates.longitude}</td><br/>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
