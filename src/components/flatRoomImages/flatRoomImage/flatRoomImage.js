import React, { PureComponent } from "react";
import "./flatRoomImage.css";
import Photo from "./roomImage.png";

class FlatRoomImage extends PureComponent {
    render() {

        return (
            <div className="col-md-3">
                <img src={ Photo } className="flat-room-image" />
            </div>
        );
    }
}

export default FlatRoomImage;
