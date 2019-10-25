import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
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
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText = {this.state.filterText}
                    onChange = {this.selectedUpdate.bind(this)} // Used for the text box entry
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding data={this.props.data} selectedBuilding={this.state.selectedBuilding}/> 
            </div>
            <div className="column3">
               <b>Add Building Form</b>
               <input type="text" class="form-control" placeholder="Test form input"></input>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
