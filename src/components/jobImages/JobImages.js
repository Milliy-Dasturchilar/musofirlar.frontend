import React, { PureComponent } from "react";

import JobImage from "./jobImage/JobImage";

class JobImages extends PureComponent {
  render() {
    return (
      <div className="container" style={{ padding: "0px" }}>
        <div className="row p-0 m-0">
          {
            this.props.jobs.map((job) => {
              return <JobImage job={job} key={job.id} />
            })
          }
        </div>
      </div>
    );
  }
}
export default JobImages;
