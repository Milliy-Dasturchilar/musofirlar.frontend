import React, { PureComponent } from "react";
import "./FlatButtons.css"

class FlatButtons extends PureComponent{

    render(){
        return(
            <div className="container container-btn">
                <button className="flat-btn">1</button>
                <button className="flat-btn">2</button>
                <button className="flat-btn">3</button>
                <button className="flat-btn">4</button>
                <button className="flat-btn">5</button>
                <button className="flat-btn"><i class="fa-solid fa-arrow-right-long"></i></button>
            </div>
        )
    }
}
export default FlatButtons