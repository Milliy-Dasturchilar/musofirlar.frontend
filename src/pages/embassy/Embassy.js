import React from "react";
import EmbassyCards from "../../components/embassyCards/EmbassyCards";
import HeadHeader from "../../components/headerTemplate/HeaderTemplate";
import InputLocation from "../../components/inputLocation/inputLocation";
import LocationCard from "../../components/locationCard/LocationCard";

class Embassy extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
               <HeadHeader strongText={"ELCHIXONALAR"} />
               <InputLocation />
               <EmbassyCards />
               <LocationCard />
            </div>
         );
    }
}
 
export default Embassy;