import React from "react";

export default class SearchFilterWhenInput extends React.Component {
    render() {
        return (
            this.renderSearchFilterWhenInput()   
        );
    }

    renderSearchFilterWhenInput() {
        return (
            <div className="search-filter">
                <svg className="" fill="#8A8F99" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M5 4c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v3z"></path><path d="M18 4c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v3z"></path><path d="M22.504 3l-0.5-0.5v20.002l0.5-0.5h-21.004l0.5 0.5v-20.002l-0.5 0.5h2.029c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-2.029c-0.276 0-0.5 0.224-0.5 0.5v20.002c0 0.276 0.224 0.5 0.5 0.5h21.004c0.276 0 0.5-0.224 0.5-0.5v-20.002c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2z"></path><path d="M16.5 3c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-8.969c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h8.969z"></path><path d="M22.531 7v-1h-21v1z"></path></svg>
                <div className="search-filter-content">
                    <div className="search-filter-input-label">
                        When
                    </div>
                    <div className="search-filter-input-value">
                        <input type="text" value="Any Time" placeholder="Search by address, zipcode or neighborhood" readOnly />
                    </div>
                </div>
            </div>
        );
    }
}