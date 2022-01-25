import React from "react";
import HeadHeader from "../../components/headerTemplate/HeaderTemplate";
import MainCard from "../../components/main-card/Main-card";
import MainWork from "../../components/mainWork/MainWork";

class Home extends React.Component {
  render() {
    return (
      <div>
        <HeadHeader strongText={"DOIM"} hasSmallText={true} />
        <MainCard />
        <MainWork />
      </div>
    );
  }
}

export default Home;
