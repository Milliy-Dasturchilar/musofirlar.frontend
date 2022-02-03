import React from "react";
// import EmbassyCards from "../../components/embassyCards/EmbassyCards";
import EmbassyKitchenCard from "../../components/embassyAndKitchenCards/EmbaccyKitchenCard";
import HeadHeader from "../../components/headerTemplate/HeaderTemplate";
import InputLocation from "../../components/inputLocation/inputLocation";
import LocationCard from "../../components/locationCard/LocationCard";
import Photo from '../../components/embassyCards/EK-main-img.png'


class Embassy extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
          <div>
            <HeadHeader strongText={"ELCHIXONALAR"} />
            <InputLocation cardLink={""} />
            <EmbassyKitchenCard
              CardImg={Photo}
              TextContent={
                "O‘zbekistonning Rossiya Federatsiyasidagi Elchixonasi"
              }
            />
            <LocationCard />
          </div>
        );
    }
}
 
export default Embassy;