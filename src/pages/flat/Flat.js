import React from "react";
import FlatRoomImages from "../../components/flatRoomImages/FlatRoomImages";
import HeadHeader from '../../components/headerTemplate/HeaderTemplate'
import InputLocation from "../../components/inputLocation/inputLocation";
import MainCard from "../../components/main-card/MainCard";

class Flat extends React.PureComponent {
    render() {
        return (
            <div>
            <HeadHeader strongText={"IJARA UYLAR"} />
                <InputLocation />
                <FlatRoomImages/>
                <MainCard/>
                <FlatRoomImages/>
                <FlatRoomImages/>
                <FlatRoomImages/>
                <FlatRoomImages/>
            </div>
        );
    }
}

export default Flat;
