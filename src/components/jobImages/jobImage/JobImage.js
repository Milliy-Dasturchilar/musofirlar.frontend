import React from "react";
import "./JobImage.css";
import {Link} from "react-router-dom";
;




class JobImage extends React.Component {

    render() {
        let job = this.props.job;
        return (
            <div className="col-md-3 job-container">
                <ul>
                    <li>
                        {job.id}
                    </li>
                    <li>
                        {job.user.first_name}
                    </li>
                    <li>
                        {job.city.name}
                    </li>
                    <li>
                        {job.address}
                    </li>
                </ul>
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
                        <Link to={`/job/${job.id}`} className="detailed-job-btn">Batafsil</Link>
                    </div>
                </div>

            </div>

        );
    }
}

export default JobImage;