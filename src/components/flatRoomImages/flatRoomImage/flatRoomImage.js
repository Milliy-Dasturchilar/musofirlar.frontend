import React, { PureComponent } from "react";
import "./flatRoomImage.css";
import Photo from "./roomImage.png";
import Icon from "../like-icon.svg";
class FlatRoomImage extends PureComponent {
    render() {

        return (
            <div className="col-md-3 room-container">
                <div className="img-container">
                    <div> <img src={Photo} className="flat-room-image" /></div>
                </div>
                <p className="img-text">Yangi</p>
                <div className="room-image-title-container">
                    <div className="room-image-title">
                        <div className="flat-room-container">
                            <h4 className="flat-price">2 Xonali / 80m2</h4>
                            <img src={Icon} />
                        </div>
                        {/* <h4></h4> */}
                    </div>

                </div>
            </div>

        );
    }
}

export default FlatRoomImage;
