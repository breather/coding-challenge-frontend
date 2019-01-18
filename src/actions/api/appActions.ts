import {AjaxHelper, IAjaxResponse} from "../../core/helpers/ajaxHelper";
import {ILocationResponse} from "../../data/types/ILocationResponse";

export class AppActions {
    constructor() {

    }

    public async getLocations(cityId: string, date?: string, timeStart?: string, duration?: number) {
        try {
            let {data} = await AjaxHelper.GET<ILocationResponse>(`locations/search/hourly`);

            if(data === null) {
                console.error("Wrong data received.");
            }

            return data;
        }
        catch (e) {
            if(e.error) {
                console.error(e.error);
            }
            else {
                console.log(e);
            }
        }
    }
}