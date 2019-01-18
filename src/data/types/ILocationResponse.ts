import {ILocationDTO} from "../types/ILocation";
import {IAvailabilityDTO} from "../types/IAvailability";

export interface ILocationResponse {
    location: ILocationDTO,
    availability?: IAvailabilityDTO[],
    score: number,
    matchType: string
}