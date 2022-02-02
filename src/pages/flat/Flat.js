import React from "react";
import FlatButtons from "../../components/flatRoomImages/flatRoomButtons/FlatButtons";
import FlatRoomImages from "../../components/flatRoomImages/FlatRoomImages";
import HeadHeader from "../../components/headerTemplate/HeaderTemplate";
import InputLocation from "../../components/inputLocation/inputLocation";

import MainCardBottom from "../../components/main-card/MainCardBottom";

class Flat extends React.PureComponent {
  render() {
    return (
      <div>
        <HeadHeader strongText={"IJARA UYLAR"} />
        <InputLocation cardLink={"/announcement"} />
        <FlatRoomImages imagesTitle={"Qidiruv natijalari"} />
        <MainCardBottom />
        <FlatRoomImages />
        <FlatRoomImages />
        <FlatRoomImages />
        <FlatRoomImages />
        <FlatButtons />
      </div>
    );
  }
}

export default Flat;
