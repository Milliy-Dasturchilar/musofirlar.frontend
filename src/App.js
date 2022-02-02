import React from "react";
import Home from "./pages/home/Home";
import Flat from "./pages/flat/Flat";
import Job from "./pages/job/Job";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Announcement from "./pages/announcement/Announcement";
import JobAnnouncement from "./pages/jobAnnouncement/JobAnnouncement";

import { Routes, Route } from "react-router-dom";
import Embassy from "./pages/embassy/Embassy";

class App extends React.PureComponent {
  render() {
    return (
      <div className="mt-5">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/flat"} element={<Flat />} />
          <Route path={"/job"} element={<Job />} />
          <Route path={"/embassy"} element={<Embassy />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/announcement"} element={<Announcement />} />
          <Route path={"/JobAnnouncement"} element={<JobAnnouncement />} />
        </Routes>
      </div>
    );
  }
}

export default App;
