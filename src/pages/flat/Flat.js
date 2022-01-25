import React from "react";
import FlatRoomImages from "../../components/flatRoomImages/FlatRoomImages";
import HeadHeader from '../../components/headerTemplate/HeaderTemplate'
import InputLocation from "../../components/inputLocation/inputLocation";


class Flat extends React.PureComponent {
    render() {
        return (
            <div>
            <HeadHeader strongText={"IJARA UYLAR"} />
                <InputLocation />
                <FlatRoomImages/>
            </div>
        );
    }
}

export default Flat;
