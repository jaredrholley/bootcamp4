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

	render() {

		return (<><b>Add Building Form</b>
            <input type="text" placeholder="Building Code" value={this.state.value} onChange = {this.codeUpdate}></input>
            <input type="text" placeholder="Building Name" value={this.state.value} onChange = {this.nameUpdate}></input>
            <input type="text" placeholder="Building Latitude" value={this.state.value} onChange = {this.latitudeUpdate}></input>
            <input type="text" placeholder="Building Longitude" value={this.state.value} onChange = {this.longitudeUpdate}></input>
            <input type="text" placeholder="Building Address" value={this.state.value} onChange = {this.addressUpdate}></input></>);
	}
}
export default AddBuilding;
