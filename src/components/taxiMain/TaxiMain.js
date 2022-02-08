import React from "react";
import './TaxiMain.css';
import CardTop from "../main-card/CardTop";

class TaxiMain extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <CardTop
                        cardTitle={"Taxi"}
                        cartText={
                            "MUSOFIRLAR.UZ yordamida o’zingiz uchun qulay va  hamyonbop ijara uylarini topishingiz mumkin!"
                        }
                    />
                    <div className="Taxi-bottom mt-4 row">
                        <p className=" text-bottom-content   col-md-5">Hududingizdagi
                            eng yaxshi taxi xizmatlari
                            </p>
                            <div className=" taxi-bottom-cards  col-md-7     row">
                                <div className=" bottom-card col-md-4">
                                    <h2 className="bottom-card-title">
                                        Biznes klass
                                    </h2>
                                     <ul>
                                         <li>Tekin Wi-Fi</li>
                                         <li>Tekin Wi-Fi</li>
                                         <li>Tekin Wi-Fi</li>
                                         <li>Tekin Wi-Fi</li>
                                     </ul>
                                     <div>
                                         <span className="bottom-card-cheap">19.9$</span>
                                         <span className="bottom-card-expensive">29.9$</span>
                                         
                                     </div>
                                     <button className="btn btn-primary mt-2">Buyurtma berish               </button>
                                </div>
                                <div className="bottom-card  col-md-4">
                                    <h2 className="bottom-card-title">
                                        Biznes klass
                                    </h2>
                                     <ul>
                                         <li>Tekin Wi-Fi</li>
                                         <li>Tekin Wi-Fi</li>
                                         <li>Tekin Wi-Fi</li>
                                         <li>Tekin Wi-Fi</li>
                                     </ul>
                                     <div>
                                         <span className="bottom-card-cheap">19.9$</span>
                                         <span className="bottom-card-expensive">29.9$</span>
                                         
                                     </div>
                                     <button className="btn btn-primary mt-2">Buyurtma berish               </button>

                                </div>
                                <div className="bottom-card  col-md-4">
                                    <h2 className="bottom-card-title">
                                        Biznes klass
                                    </h2>
                                     <ul>
                                         <li>Tekin Wi-Fi</li>
                                         <li>Tekin Wi-Fi</li>
                                         <li>Tekin Wi-Fi</li>
                                         <li>Tekin Wi-Fi</li>
                                     </ul>
                                     <div>
                                         <span className="bottom-card-cheap">19.9$</span>
                                         <span className="bottom-card-expensive">29.9$</span>
                                         
                                     </div>
                                     <button className="btn btn-primary mt-2">Buyurtma berish               </button>

                                </div>

                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaxiMain;