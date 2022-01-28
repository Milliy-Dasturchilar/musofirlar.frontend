import React from "react";
import EmbassyCards from "../../components/embassyCards/EmbassyCards";
import HeadHeader from "../../components/headerTemplate/HeaderTemplate";
import InputLocation from "../../components/inputLocation/inputLocation";

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
            </div>
         );
    }
}
 
export default Embassy;