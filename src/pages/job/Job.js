// import { Component } from "react";
import React, {Component} from "react";
import HeadHeader from '../../components/headerTemplate/HeaderTemplate'
import InputLocation from "../../components/inputLocation/inputLocation";


class Job extends React.PureComponent {
   
    render() { 
        return ( 
            <div>
              <HeadHeader strongText={"ISH TOPISH"}/>
              <InputLocation/>
            </div>
         );
    }
}
 
export default Job;