import React, { PureComponent } from "react";
import "./FlatCard.css";
import Photo from "./roomImage.png";
import Icon from "./like-icon.svg";
import {Link} from "react-router-dom";

class FlatCard extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let flat = this.props.flat;
        let linkToDetail = `/flat/${flat.id}`;
        return (
            <div className="col-md-3 room-container my-5">
                <div className="img-container">
                     <img src={flat.images[0].image} className="flat-room-image" />
                </div>
                <p className="img-text">Yangi</p>
                <div className="room-image-title-container">
                    <div className="room-image-title">
                        <div className="flat-room-container">
                            <h4 className="flat-rooms text-light" >{flat.number_of_rooms} xonali</h4>
                            <img src={Icon} className="flat-like-icon"/>
                        </div>
                        <div className="room-equipment-container">
                            <div className="room-equipment-title">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{flat.city.country.name}</span>
                            </div>
                            <div className="room-equipment-title">
                                <i className="fas fa-user-circle"></i>
                                <span>{flat.user.first_name}</span>
                            </div>
                        </div>
                        <div className="room-equipment-container">
                            <div className="room-equipment-title">
                                <i className="far fa-calendar-alt me-1"></i>
                                <span>{flat.created_at.split('T')[0]}</span>
                            </div>
                            <div className="room-equipment-title">
                                <i className="fas fa-dollar-sign"></i>
                                <span>{flat.price}</span>
                            </div>
                        </div>
                    </div>
                      <Link to={linkToDetail} state={{id: flat.id}} className="flat-about-btn">Batafsil</Link>
                </div>
            </div>
        );
    }
}

export default FlatCard;
