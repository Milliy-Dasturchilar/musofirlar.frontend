import React from "react";
import Photo from "./locationCard.png"
import "./LocationCard.css"
class LocationCard extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className="container mt-5 img-container" >
                <img src={Photo} className="container EK-card" />
            </div>
        );
    }
}

export default LocationCard;