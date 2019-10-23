import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		var buildingInfo;

		if (this.props.selectedBuilding !== 0) {
			var buildingToDisplay = this.props.data.find((building) => { return (building.id === this.props.selectedBuilding) } );
			buildingInfo = <i>{buildingToDisplay.name}</i>
		}
		else 
		{
			buildingInfo = <i>Click on a name to view more information</i>
		}

		return (
			<div>
				<p>
					{' '}
					{buildingInfo}
				</p>
			</div>
		);
	}
}
export default ViewBuilding;
