import React from "react";
import FlatButtons from "../../components/flatRoomImages/flatRoomButtons/FlatButtons";
import FlatCards from "../../components/flatRoomImages/FlatCards";
import HeadHeader from "../../components/headerTemplate/HeaderTemplate";
import InputLocation from "../../components/inputLocation/inputLocation";

import MainCardBottom from "../../components/main-card/MainCardBottom";

class Flat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
    };
  }

  componentDidMount() {
    let url = "https://musofir.pythonanywhere.com/api/v1/flat/";
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ flats: data });
      });
  }

  render() {
    return (
      <div>
        <HeadHeader strongText={"IJARA UYLAR"} />
        <InputLocation cardLink={"/flat/add"} />
        <FlatCards flats={this.state.flats} />
        <FlatButtons />
      </div>
    );
  }
}

export default Flat;
