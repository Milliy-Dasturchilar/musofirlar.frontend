import React from "react";
import "./inputLocation.css";

class InputLocation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input-location-container container">
                <div className="input-location-input">  
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
                                <option value="london">london</option>
                                <option value="berlin">Berlin</option>
                                <option value="toshkent">Toshkent</option>
                            </select>
                        </div>

                        <input type="text" placeholder="Write down here to search" className="to-search" />
                        <button><i className="fas fa-search"></i></button>
                    </form>
                    <div className="input-location-advertisement">
                        <button>Elon berish</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default InputLocation;