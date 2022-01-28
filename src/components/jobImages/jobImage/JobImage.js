import React from "react";
import "./JobImage.css"
import Photo from "./jobCard.png"


class JobImage extends React.Component {

    render() {
        return (
            <div className="col-md-3 job-container">
                <div className="img-container">
                    <div>
                        <img src={Photo} className="job-image" />
                    </div>
                </div>
                <p className="img-text-new">Yangi</p>
                <div className="job-card-title-container">
                    <h4 className="job-card-title">Mohir ustalarni ishga taklif etamiz
                        <span> 7.500.000</span><p className="sum">so'm</p> gacha oylik maosh</h4>
                    <p className="job-card-text">Afzalliklari:</p>
                    <div className="job-equipment-container">
                        <div className="job-equipment-title">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>London</span>
                        </div>
                        <div className="job-equipment-title">
                            <i class="far fa-clock"></i>
                            <span>8 soatlik ish</span>
                        </div>
                    </div>
                    <div className="job-equipment-container">
                        <div className="job-equipment-title">
                            <i class="fas fa-couch" style={{ fontSize: '10px' }}></i>
                            <span>Yotoq</span>
                        </div>
                        <div className="job-equipment-title">
                            <i class="fas fa-utensils"></i>
                            <span>3 mahal ovqat</span>
                        </div>
                    </div>
                    <div className="job-container-btn">
                        <button className="contact-job-btn">Bog'lanish</button>
                        <button className="detailed-job-btn">Batafsil</button>
                    </div>

                </div>

            </div>

        );
    }
}

export default JobImage;