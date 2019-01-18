import React, { SyntheticEvent } from "react";
import Select from "react-select";
import SearchFilterWhenInput from "../../components/searchFilterWhenInput";
import * as ILocationResponse from "../../data/types/ILocationResponse";
//import * as AppActions from "../../actions/api/appActions"; // Use appActionsMock instead due to the cors issue with Breather API.
import * as AppActionsMock from "../../actions/api/appActionsMock";
import LocationsList from "../../components/lists/locationList";

export interface LocationsVCState {
    locations: ILocationResponse.ILocationResponse[]
}

const cities = [
    { label: "New York City", value: "8jLq7Yxb3R", key: "8jLq7Yxb3R" },
    { label: "SF Bay Area", value: "kMG2IsYtKL", key: "kMG2IsYtKL"},
    { label: "Boston", value: "lIRf1YeVcA", key: "lIRf1YeVcA" },
    { label: "Los Angeles", value: "fTb7f2cerf", key: "fTb7f2cerf" },
    { label: "Chicago", value: "Zn3FHU9Kej", key: "Zn3FHU9Kej" },
    { label: "Washington DC", value: "jxCwZvcWuf", key: "jxCwZvcWuf" },
    { label: "London", value: "HEG8fNPoN3", key: "HEG8fNPoN3" },
    { label: "Montreal", value: "x7bPMpzIvM", key: "x7bPMpzIvM" },
  ];

class LocationsViewController extends React.Component <any, LocationsVCState> {
    private appActionsMock = new AppActionsMock.AppActionsMock();

    constructor(props: any) {
        super(props);

        this.state = {
            locations: []
        }

        this.getLocations = this.getLocations.bind(this);
    }

    render() {
        return (
            <div className="locations-container">
                {this.renderLocationsHeder()}  
                {this.renderLocationsContent()}  
            </div>
        );
    }

    private renderLocationsHeder() {
        return (
            <div className="locations-header">
                <div className="locations-header-table">
                    <div className="locations-header-tr">
                        <div className="locations-header-td cell-medium border-right">
                        <div className="select container">
                            <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <Select options={ cities } defaultValue={cities[0]} className="select" onChange={this.getLocations} />
                            </div>
                            <div className="col-md-4"></div>
                            </div>
                        </div>    
                        </div>
                        <div className="locations-header-td cell-medium border-right">
                            <SearchFilterWhenInput />
                        </div>
                        <div className="locations-header-td cell-small border-right">
                            Attendees
                        </div>
                        <div className="locations-header-td cell-small">
                            More Filters
                        </div>
                    </div>
                </div>
            </div>
        );
    }    

    private renderLocationsContent() {
        return (
            <div className="locations-content">
                <div className="locations-content-table">
                    <div className="locations-content-tr">
                        <div className="locations-content-td">
                        {this.renderLocationsListHeader()}
                        {this.renderLocationsList()} 
                        </div>
                        <div className="locations-content-td">
                        Google Map
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private renderLocationsListHeader() {
        return (
            <div className="locations-list-header">
                <div className="locations-list-count">{this.state.locations.length} spaces</div>
            </div> 
        );
    }

    private renderLocationsList(): JSX.Element {
        return (
            <LocationsList locationListItems={this.state.locations} />
        )
    }

    async componentWillMount() {
        var locationsData = this.appActionsMock.getLocations(cities[0].value);

        await this.setState({ locations: locationsData });
    }

    async getLocations(optionSelected: any) {
        let appActionsMocLocal = new AppActionsMock.AppActionsMock();

        var locationsData = appActionsMocLocal.getLocations(optionSelected.value);

        this.setState({ locations: locationsData });
    }

    componentDidMount() {
        
    }

    shouldComponentUpdate(_nextProps: any, _nextState: any) {
        return true;
    }
}

export default LocationsViewController;
