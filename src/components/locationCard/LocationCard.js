import React from "react";
import Photo from "./locationCard.png"
import "./LocationCard.css"
class LocationCard extends React.PureComponent {
    render() {
        return (
            <div className="container mt-5 img-container" >
                <img src={Photo} alt="" className="container EK-card" />
            </div>
        );
    }
}

export default LocationCard;