import React from "react";
import "./JobImage.css";
import {Link} from "react-router-dom";
;




class JobImage extends React.Component {

    render() {
        let job = this.props.job;
        return (
            <div className="col-md-3 job-container">
               
                <div className="job-card-title-container mt-5">
                    <h4 className="job-card-title"> Mohir {job.job_title} larni ishga taklif etamiz
                        <span> 7.500.000</span><p className="sum">so'm</p> gacha oylik maosh</h4>
                    <p className="job-card-text">{job.job_title}</p>
                    <div className="job-equipment-container">
                        <div className="job-equipment-title">
                            <i className="fas fa-map-marker-alt"></i>
                            <span> {job.city.name}</span>
                        </div>
                        <div className="job-equipment-title">
                            <i className="far fa-clock "></i>
                            <span>{job.working_hours}</span>
                        </div>
                    </div>
                    <div className="job-equipment-container">
                        <div className="job-equipment-title">
                        <i class="fas fa-dollar-sign"></i>
                            <span>{job.job_type}</span>
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