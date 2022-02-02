import React, { PureComponent } from "react";
import "./flatRoomImage.css";
// import "./../../main-card/MainCard.css"
import Photo from "./roomImage.png";
import Icon from "../like-icon.svg";
class FlatRoomImage extends PureComponent {
    render() {

        return (
            <div className="col-md-3 room-container">
                <div className="img-container">
                     <img src={Photo} className="flat-room-image" />
                </div>
                <p className="img-text">Yangi</p>
                <div className="room-image-title-container">
                    <div className="room-image-title">
                        <div className="flat-room-container">
                            <h4 className="flat-rooms" >2 Xonali / 80m2</h4>
                            <img src={Icon} className="flat-like-icon"/>
                        </div>
                        <h4 className="flat-price">150.000so’m</h4>
                        <div className="room-equipment-container">
                            <div className="room-equipment-title">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>London</span>
                            </div>
                            <div className="room-equipment-title">
                                <i className="fas fa-user-circle"></i>
                                <span>Yakkalik</span>
                            </div>
                        </div>
                        <div className="room-equipment-container">
                            <div className="room-equipment-title">
                                <i className="fas fa-chair"></i>
                                <span>Mebellar</span>
                            </div>
                            <div className="room-equipment-title">
                                <i className="fas fa-dollar-sign"></i>
                                <span>Arzon</span>
                            </div>
                        </div>
                        

                    </div>
                      <button className="flat-about-btn">Batafsil</button>
                </div>
            </div>

        );
    }
}

export default FlatRoomImage;
