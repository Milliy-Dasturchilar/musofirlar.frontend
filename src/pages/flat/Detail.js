import React from "react";
import Photo from "./detailMainCard.png"
import detailImages from "./detailImages.png"
import location from "./location.png"
import "./Detail.css"


class FlatDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className="container detail-container">
                <h2 className="detail-title">2 Xonali / 80m2 uy ijaraga beriladi</h2>
                <div className="detail-location-container">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>London, Downtown st. 77</span>
                </div>
                <div>
                    <img src={Photo} className="detail-main-card"/>
                    <div>
                        <img src="" className="user-img" />
                        <p className="user-name">Abdusalom Abdusalomov</p>
                        <p className="renter">Ijarachi</p>
                        <p className="renter-name">Kecha 10:00</p>
                        <p className="renter-phone">+998 90 123 45 67</p>
                        <form className="detail-form">
                            <input className="input-detail-name" type={'text'} placeholder="Ism familiyangizni kiriting..." /> <br />
                            <input className="input-detail-nomer" type={'number'} placeholder="Telefon raqamingizni kiriting..." /> <br />
                            <input className="input-detail-message" type={'text'} placeholder="Xabar matnini kiriting..." /> <br />
                            <input className="input-detail-btn" type={'submit'} value={"Jo'natish"} />
                        </form>
                        <div>
                            <div>
                                <div>
                                    <img src={detailImages} />
                                    <img src={detailImages} />
                                    <img src={detailImages} />
                                    <img src={detailImages} />
                                    <img src={detailImages} />
                                </div>
                                <p>17 yanvar, 2022 yil</p>
                            </div>
                            <div>
                                <h3>150.000<p>so’m</p></h3>
                                <hr />

                            </div>
                            <div>
                                <h4>Batafsil</h4>
                                <p>Xonalar soni: 4</p>
                                <p>Qavat: 2</p> 
                                <p>Sanuzel: 2ta</p>
                                <p>Jihozlar: Bor</p>
                                <p>Qulayliklar: Issiq suv ta’minoti, Wi-fi,
                                    va hokazo ...</p>
                            </div>
                            <div>
                                <h2>Qoshimcha</h2>
                                <p>
                                    Monolithic web platforms crack when teams create international versions of a website or e-commerce store. Copying and pasting changes from one site to another slows development, and codebases quickly get out of sync. Monolithic web platforms crack when teams create international  versions of a website or e-commerce store. Copying and pasting changes  from one site to another slows development, and codebases quickly get out of sync.Monolithic web platforms crack when teams create internati versions of a website or e-commerce store. Copying and pasting changes from one site to another slows development, and codebases quickly get
                                    out of sync.
                                </p>
                            </div>
                           
                        </div>
                        <img src={location}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FlatDetail;