import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		var headerInfo;
		var buildingInfo = "";
		var coordinates = "";
		var address = "";

		if (this.props.selectedBuilding !== 0 && this.props.data.find((building) => { return (building.id === this.props.selectedBuilding) } ) != null) {
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
					<div class="jumbotron">
					<h4 class="display-8">{headerInfo}</h4>
					<hr class="my-4"></hr>
					</div>
				</div>
			);

		}

		return (
			<div>
				<div class="jumbotron">
				<h4 class="display-8">{headerInfo}</h4>
				<hr class="my-4"></hr>
					<p class="card-text"><td>Building Code :  {buildingInfo.code}</td><br/>
					<td>{address}</td><br/>
					<td>{coordinates}</td></p>
				</div>
			</div>
		);
	}
}
export default ViewBuilding;
