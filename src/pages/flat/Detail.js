import React from "react";
import Photo from "./detailMainCard.png"
import detailImages from "./detailImages.png"
import location from "./location.png"
import "./Detail.css"
import FlatRoomImages from "../../components/flatRoomImages/FlatRoomImages";


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

                <div className="detail-main-section-container">
                    
                        <img src={Photo} className="detail-main-card" />
                   
                    <div className="user-container">
                        <div className="user-about-container">
                            <i class="fas fa-user-circle user-img"></i>
                            <div className="user-about">
                                <p className="user-name">Abdusalom Abdusalomov</p>
                                <p className="renter">Ijarachi</p>
                                <p className="renter-time">Kecha 10:00</p>
                                <p className="renter-phone">+998 90 123 45 67</p>
                            </div>
                        </div>
                        <form className="detail-form">
                            <input className="input-detail-name" type={'text'} placeholder="Ism familiyangizni kiriting..." /> <br />
                            <input className="input-detail-nomer" type={'number'} placeholder="Telefon raqamingizni kiriting..." /> <br />
                            <textarea className="input-detail-message" rows={10}>Matn kiritng </textarea> <br />
                            <input className="input-detail-btn" type={'submit'} value={"Jo'natish"} />
                        </form>
                    </div>
                </div>
                <div className="detail-about-content-container">
                    <div >

                        <div className="detail-images-container">
                            <img className="detail-about-images" src={detailImages} />
                            <img className="detail-about-images" src={detailImages} />
                            <img className="detail-about-images" src={detailImages} />
                            <img className="detail-about-images" src={detailImages} />
                            <img className="detail-about-images" src={detailImages} />
                        </div>
                        <p className="detail-date-text">17 yanvar, 2022 yil</p>

                        <div className="price-container">
                            <h3 className="detail-price">150.000<p>so'm</p></h3>
                        </div>
                        <div className="detail-about-container">
                            <h4>Batafsil</h4>
                            <p>Xonalar soni: 4</p>
                            <p>Qavat: 2</p>
                            <p>Sanuzel: 2ta</p>
                            <p>Jihozlar: Bor</p>
                            <p>Qulayliklar: Issiq suv ta'minoti, Wi-fi,
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
                    <div className="location-card-container">
                    <img className="detail-location-card" src={location} /></div>

                </div>

             <FlatRoomImages ImagesTitle={"O'xshash e'lonlar"}/>
            </div>
        );
    }
}

export default FlatDetail;