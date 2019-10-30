import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLength: this.props.data.length,
      filterText: '',
      selectedBuilding: null,
      buildingTemplate:{
        id: null,
        code: '',
        name: '',
        coordinates:{
          latitude: null,
          longitude: null
        },
        address: ''
      }
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({filterText: value}); // filterText for parent in heir.
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({selectedBuilding: id}); // SelectedBuilding for parent
  }

  changeCode(code) {
    var revised = this.state.buildingTemplate;
    revised.code = code;
    this.setState({buildingTemplate : revised});
    revised = null;
  }

  changeName(name) {
    var revised = this.state.buildingTemplate;
    revised.name = name;
    this.setState({buildingTemplate : revised}); 
    revised = null;
  }

  changeLatitude(latitude) {
    var revised = this.state.buildingTemplate;
    revised.coordinates.latitude = latitude;
    this.setState({buildingTemplate : revised}); 
    revised = null;
  }

  changeLongitude(longitude) {
    var revised = this.state.buildingTemplate;
    revised.coordinates.longitude = longitude;
    this.setState({buildingTemplate : revised}); 
    revised = null;
  }

  changeAddress(address) {
    var revised = this.state.buildingTemplate;
    revised.address = address;
    this.setState({buildingTemplate : revised}); 
    revised = null;
  }

  commitBuildingToList() {
    var revised = this.state.buildingTemplate;
    revised.id = this.state.dataLength+1;
    this.setState({dataLength : this.state.dataLength+1});
    this.setState({buildingTemplate : revised}); 
    this.props.data.push(this.state.buildingTemplate);
    console.log(this.state.buildingTemplate)

    revised = {
      id: null,
      code: '',
      name: '',
      coordinates:{
        latitude: null,
        longitude: null
      },
      address: ''
    };
    console.log(this.state.buildingTemplate);
    this.setState({buildingTemplate : revised});
    
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search onChange={this.filterUpdate.bind(this)}/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                  <BuildingList
                    data={this.props.data}
                    filterText = {this.state.filterText}
                    onChange = {this.selectedUpdate.bind(this)} // Used for the text box entry
                  />
              </div>
            </div>
            <div>
              <ViewBuilding data={this.props.data} selectedBuilding={this.state.selectedBuilding}/>
            </div>
            <div className="column3">
               <AddBuilding changeCode={this.changeCode.bind(this)} changeName={this.changeName.bind(this)} changeLatitude={this.changeLatitude.bind(this)} 
               changeLongitude={this.changeLongitude.bind(this)} changeAddress={this.changeAddress.bind(this)} commitBuildingToList={this.commitBuildingToList.bind(this)}/>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
