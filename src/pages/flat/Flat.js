import React from "react";
import FlatButtons from "../../components/flatRoomImages/flatRoomButtons/FlatButtons";
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
                <FlatRoomImages imagesTitle={"Qidiruv natijalari"}/>
                <MainCard/>
                <FlatRoomImages/>
                <FlatRoomImages/>
                <FlatRoomImages/>
                <FlatRoomImages/>
                <FlatButtons/>
            </div>
        );
    }
}

export default Flat;
