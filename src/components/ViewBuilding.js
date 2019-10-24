import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		var headerInfo;
		var buildingInfo = "";
		var coordinates = "";
		var address = "";

		if (this.props.selectedBuilding !== 0) {
			buildingInfo = this.props.data.find((building) => { return (building.id === this.props.selectedBuilding) } );
			headerInfo = <b>{buildingInfo.name}</b>

			if ( buildingInfo.address != null) {
				address = <div>Address : {buildingInfo.address}</div>
			}

			if ( buildingInfo.coordinates != null) {
				coordinates = <div><td>Latitude : {buildingInfo.coordinates.latitude}</td><br/>
				<td>Longitude : {buildingInfo.coordinates.longitude}</td><br/></div>;
			}

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
					<td>{address}</td><br/>
					<td>{coordinates}</td>
					
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
