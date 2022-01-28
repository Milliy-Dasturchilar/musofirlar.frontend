import React from "react";
import Photo from "./locationCard.png"

class LocationCard extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className="container mt-5" style={{width:"100%"}}>
                <img src={Photo} className="container" style={{width:"100%"}}/>
            </div>
        );
    }
}

export default LocationCard;