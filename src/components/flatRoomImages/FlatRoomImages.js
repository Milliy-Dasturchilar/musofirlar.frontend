import React, { PureComponent } from "react";

import FlatRoomImage from "./flatRoomImage/flatRoomImage";

class FlatRoomImages extends PureComponent {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="container" style={{padding:"0"}}>
                <h2 className="mb-5 mt-5">{this.props.imagesTitle}</h2>
                <div className="row p-0 m-0">
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