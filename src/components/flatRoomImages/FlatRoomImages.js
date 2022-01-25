import React, { PureComponent } from "react";

import FlatRoomImage from "./flatRoomImage/flatRoomImage";

class FlatRoomImages extends PureComponent {
    render() {
        return (
            <div className="container">
                <h2 className="">Qidiruv natijalari</h2>
                <div className="row">
                    <FlatRoomImage />
                    <FlatRoomImage />
                    <FlatRoomImage />
                    <FlatRoomImage />
                </div>
            </div>
        );
    }
}
export default FlatRoomImages;