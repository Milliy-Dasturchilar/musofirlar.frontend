// import { Component } from "react";
import React, {Component} from "react";
import FlatButtons from "../../components/flatRoomImages/flatRoomButtons/FlatButtons";
import HeadHeader from '../../components/headerTemplate/HeaderTemplate'
import InputLocation from "../../components/inputLocation/inputLocation";
import JobImages from "../../components/jobImages/JobImages";
import MainCardBottom from "../../components/main-card/MainCardBottom";


class Job extends React.PureComponent {
   
    render() { 
        return ( 
            <div>
              <HeadHeader strongText={"ISH TOPISH"}/>
              <InputLocation/>
              <JobImages imagesTitle={"Qidiruv natijalari"}/>
              <MainCardBottom  mainCardTitle={"Ko’proq imkoniyatga ega kasblarga erishing"}/>
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