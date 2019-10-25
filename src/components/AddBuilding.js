import React from 'react';

class AddBuilding extends React.Component {
    
    constructor(props) {
		super(props);
		this.state = {code: ' ', name: ' ', latitude: 0, longitude: 0, address: ''};

        this.codeUpdate = this.codeUpdate.bind(this);
        this.nameUpdate = this.nameUpdate.bind(this);
        this.latitudeUpdate = this.latitudeUpdate.bind(this);
        this.longitudeUpdate = this.longitudeUpdate.bind(this);
        this.addressUpdate = this.addressUpdate.bind(this);
    }
    
    codeUpdate(code) {
        this.setState({code: code.target.value});
		this.props.changeCode(code.target.value);
    }

    nameUpdate(name) {
        this.setState({name: name.target.value});
		this.props.changeName(name.target.value);
    }

    latitudeUpdate(latitude) {
        this.setState({latitude: latitude.target.value});
		this.props.changeLatitude(latitude.target.value);
    }

    longitudeUpdate(longitude) {
        this.setState({longitude: longitude.target.value});
		this.props.changeLongitude(longitude.target.value);
    }

    addressUpdate(address) {
        this.setState({address: address.target.value});
		this.props.changeAddress(address.target.value);
    }

    commitBuildingToList() {
        this.props.commitBuildingToList();
    }

	render() {

		return (<><b>Add Building Form</b>
            <input type="text" placeholder="Building Code" ref="buildingField1" value={this.state.value} onChange = {this.codeUpdate}></input>
            <input type="text" placeholder="Building Name" ref="buildingField2" value={this.state.value} onChange = {this.nameUpdate}></input>
            <input type="text" placeholder="Building Latitude" ref="buildingField3" value={this.state.value} onChange = {this.latitudeUpdate}></input>
            <input type="text" placeholder="Building Longitude" ref="buildingField4" value={this.state.value} onChange = {this.longitudeUpdate}></input>
            <input type="text" placeholder="Building Address" ref="buildingField5" value={this.state.value} onChange = {this.addressUpdate}></input>
            <button variant="secondary" size="sm" onClick={() => {this.refs.buildingField1.value=""; this.refs.buildingField2.value=""; this.refs.buildingField3.value="";
            this.refs.buildingField4.value=""; this.refs.buildingField5.value=""; this.commitBuildingToList()}}>Add Building</button></>);
	}
}
export default AddBuilding;
