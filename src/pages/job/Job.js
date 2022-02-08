import React, { Component } from "react";
import FlatButtons from "../../components/flatRoomImages/flatRoomButtons/FlatButtons";
import HeadHeader from "../../components/headerTemplate/HeaderTemplate";
import InputLocation from "../../components/inputLocation/inputLocation";
import JobImages from "../../components/jobImages/JobImages";
import MainCardBottom from "../../components/main-card/MainCardBottom";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    let url = "https://musofir.pythonanywhere.com/api/v1/job/";
    fetch(url)
      .then((res) => res.json())
      .then((res) => this.setState({ jobs: res }));
  }

  render() {
    const a = (
      <div>
        Ko’proq imkoniyatga <br />
        ega kasblarga erishing
      </div>
    );
    return (
      <div>
        <HeadHeader strongText={"ISH TOPISH"} />
        <InputLocation cardLink={"/jobAnnouncement"} />
        <MainCardBottom mainCardTitle={a} />
        <JobImages jobs={this.state.jobs} />
        <FlatButtons />
      </div>
    );
  }
}

export default Job;
