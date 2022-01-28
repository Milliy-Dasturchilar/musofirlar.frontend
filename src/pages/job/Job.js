// import { Component } from "react";
import React, {Component} from "react";
import HeadHeader from '../../components/headerTemplate/HeaderTemplate'
import InputLocation from "../../components/inputLocation/inputLocation";
import JobImages from "../../components/jobImages/JobImages";


class Job extends React.PureComponent {
   
    render() { 
        return ( 
            <div>
              <HeadHeader strongText={"ISH TOPISH"}/>
              <InputLocation/>
              <JobImages imagesTitle={"Qidiruv natijalari"}/>
            </div>
         );
    }
}
 
export default Job;