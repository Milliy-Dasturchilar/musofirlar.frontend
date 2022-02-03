import React from "react";
import "./Canteen.css";
import   EmbassyKitchenCard from '../../components/embassyAndKitchenCards/EmbaccyKitchenCard'
import HeadHeader from "../../components/headerTemplate/HeaderTemplate";
import InputLocation from "../../components/inputLocation/inputLocation";
import LocationCard from "../../components/locationCard/LocationCard";
import CanteenImg from "./Canteen.png";
const a = "O’zbekiston milliy taomlar oshxonasi";
class Canteen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div>
        <HeadHeader strongText={"O'zbek Oshxonalar"} />
        <InputLocation cardLink={""} />
        <EmbassyKitchenCard
          CardImg={CanteenImg}
          TextContent={a}
         />
        <LocationCard />
      </div>
    );
  }
}

export default Canteen;
