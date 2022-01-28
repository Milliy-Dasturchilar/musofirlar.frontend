import React, { PureComponent } from "react";

import JobImage from "./jobImage/JobImage";

class JobImages extends PureComponent {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="container">
                <h2 className="mb-5 mt-5">{this.props.imagesTitle}</h2>
                <div className="row p-0 m-0">
                    <JobImage />
                    <JobImage />
                    <JobImage />
                    <JobImage />
                </div>
            </div>
        );
    }
}
export default JobImages;