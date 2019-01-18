import data from "../../data/locations.json";
import * as ILocationResponse from "../../data/types/ILocationResponse.js";

export class AppActionsMock {
    constructor() {

    }

    public getLocations(cityId: string, date?: string, timeStart?: string, duration?: number) : ILocationResponse.ILocationResponse[] {
        let filteredData: ILocationResponse.ILocationResponse[] = [];

        try {
            if(data === null) {
                console.error("Wrong data received.");
            }

            filteredData = [];

            filteredData = data.filter(locationItem => {
                return locationItem.location.cityId === cityId;
            });
        }
        catch (e) {
            if(e.error) {
                console.error(e.error);
            }
            else {
                console.log(e);
            }
        }

        return filteredData;
    }
}