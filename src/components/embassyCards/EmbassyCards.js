import React from "react";
import EmbassyKitchenCard from "../embassyAndKitchenCards/EmbaccyKitchenCard";




class EmbassyCards extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
              <EmbassyKitchenCard/>
            </div>
         );
    }
}
 
export default EmbassyCards;