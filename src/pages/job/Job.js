// import { Component } from "react";
import React, {Component} from "react";
import FlatButtons from "../../components/flatRoomImages/flatRoomButtons/FlatButtons";
import HeadHeader from '../../components/headerTemplate/HeaderTemplate'
import InputLocation from "../../components/inputLocation/inputLocation";
import JobImages from "../../components/jobImages/JobImages";
import MainCardBottom from "../../components/main-card/MainCardBottom";
import {Link} from 'react-router-dom'

class Job extends React.PureComponent {
   
    render() { 
      const a =<div>Ko’proq imkoniyatga <br/>ega kasblarga erishing</div>
        return (
          <div>
            <HeadHeader strongText={"ISH TOPISH"} />
            <InputLocation cardLink={"/jobAnnouncement"} />
            <JobImages imagesTitle={"Qidiruv natijalari"} />
            <MainCardBottom mainCardTitle={a} />
            <JobImages />
            <JobImages />
            <JobImages />
            <JobImages />
            <FlatButtons />
          </div>
        );
    }
}
 
export default Job;