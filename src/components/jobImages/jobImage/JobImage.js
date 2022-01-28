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
                     7.500.000so’m gacha oylik maosh</h4>
                     <p className="job-card-text">Afzalliklari:</p>
                     <div className="job-equipment-container">
                            <div className="job-equipment-title">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>London</span>
                            </div>
                            <div className="job-equipment-title">
                                <i className="fas fa-user-circle"></i>
                                <span>Yakkalik</span>
                            </div>
                        </div>
                        <div className="job-equipment-container">
                            <div className="job-equipment-title">
                                <i className="fas fa-chair"></i>
                                <span>Mebellar</span>
                            </div>
                            <div className="job-equipment-titl">
                                <i className="fas fa-dollar-sign"></i>
                                <span>Arzon</span>
                            </div>
                        </div>

                </div>
            </div>

        );
    }
}

export default JobImage;