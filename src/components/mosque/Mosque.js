import React from "react";
import "./Mosque.css";
import Mosque1 from './Mosque1.png';
import Mosque2 from './Mosque2.png';
import Mosque3 from './Mosque3.png';
import CardTop from "../main-card/CardTop";

class Mosque extends React.Component {

    render() { 
        return ( 
            <div>
                <CardTop
                    cardTitle={"Masjidlar"}
                    cartText={
                        "MUSOFIRLAR.UZ yordamida o’zingiz uchun qulay va  hamyonbop ijara uylarini topishingiz mumkin!"
                    }
                />
                <div className="container">
                <div className="container mt-4 row">
                    <img src={Mosque1} className="col-md-4 mt-3" />
                    <img src={Mosque2} className="col-md-4 mt-3" />
                    <img src={Mosque3} className="col-md-4 mt-3" />

                </div>
                    </div>
                
            </div>
         );
    }
}
 
export default Mosque;