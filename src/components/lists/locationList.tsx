import * as React from "react";
import { ILocationResponse } from "../../data/types/ILocationResponse";

export interface ILocationsListProps {
    locationListItems: ILocationResponse[]
}

export default class LocationsList extends React.Component<ILocationsListProps, any> {
    constructor(props: ILocationsListProps) {
        super(props);
    }

    render() {
        let locations = this.props.locationListItems.map(locationItem => {
            return <div className="location-list-item">
                        <div>
                            <img className="location-list-item-img" src={ locationItem.location.images[0].url } width="288" height="192" />
                        </div>
                        <div className="table">
                            <div className="row">
                                <div className="cell-medium location-list-item-rating">
                                    <span className="location-list-item-rating-average">{ locationItem.location.ratingAverage }</span>
                                    <span>
                                        <svg className="location-list-item-rating-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" preserveAspectRatio="xMidYMid meet"><polygon points="12 15.5 7.886 17.663 8.671 13.082 5.343 9.837 9.943 9.168 12 5 14.057 9.168 18.657 9.837 15.329 13.082 16.114 17.663"></polygon></svg>
                                    </span>
                                    <span>{ locationItem.location.ratingCount } Ratings</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell-medium location-list-item-rating">
                                    <div className="location-list-item-label">
                                        { locationItem.location.name }
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell-medium location-list-item-capacity">
                                    <span>{ locationItem.location.tableCapacity } people </span>
                                    &#183;
                                    <span> { locationItem.location.addressCity }</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell-medium location-list-item-price">
                                    <span>{ locationItem.location.currencyCode }</span>
                                    <span>{ locationItem.location.monthlyPrice }</span> / Month
                                </div>
                            </div>
                        </div>
                    </div>
        });

        return <div className="locations-list-scrollable">{locations}</div>
    }
}