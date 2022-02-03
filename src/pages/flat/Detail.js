import React from "react";
import Photo from "./detailMainCard.png"
import detailImages from "./detailImages.png"
import location from "./location.png"
class FlatDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className="container">
                <h2>2 Xonali / 80m2 uy ijaraga beriladi</h2>
                <div>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>London, Downtown st. 77</span>
                </div>
                <div>
                    <img src={Photo} />
                    <div>
                        <img src="" />
                        <p>Abdusalom Abdusalomov</p>
                        <p>Ijarachi</p>
                        <p>Kecha 10:00</p>
                        <p>+998 90 123 45 67</p>
                        <form>
                            <input type={'text'} placeholder="Ism familiyangizni kiriting..." /> <br />
                            <input type={'number'} placeholder="Telefon raqamingizni kiriting..." /> <br />
                            <input type={'text'} placeholder="Xabar matnini kiriting..." /> <br />
                            <input type={'submit'} value={"Jo'natish"} />
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