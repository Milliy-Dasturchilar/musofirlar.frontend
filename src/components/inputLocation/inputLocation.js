import React from "react";
import "./inputLocation.css";

class InputLocation extends React.Component {   

    render() {
        return (
            <div className="input-location-container">
                <div className="input-location-input container">  
                    <form className="form" id="form">
                        <div className="country-container">
                            <div className="country-location">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <select name="country" id="country">

                                <option value="united">United Kingdom</option>
                                <option value="germaniya">Germaniya</option>
                                <option value="ozbek">O'zbekiston</option>
                            </select>
                        </div>

                        <div className="capital-container">
                            <div className="capital-location">
                                <i className="far fa-building"></i>
                            </div>
                            <select name="capital" id="capital">
                                <option value="london">London</option>
                                <option value="berlin">Berlin</option>
                                <option value="toshkent">Toshkent</option>
                            </select>
                        </div>
                        <div className="search">

                        </div>

                        <input type="text" placeholder="Write down here to search" className="to-search" />
                        <button className="search-btn"><i className="fas fa-search search-icon"></i></button>
                    </form>
                    <div className="input-location-advertisement">
                        <button className="advertisement-btn">Elon berish</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default InputLocation;