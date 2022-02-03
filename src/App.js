import React from "react";
import Home from "./pages/home/Home";
import Flat from "./pages/flat/Flat";
import FlatDetail from "./pages/flat/Detail";
import Job from "./pages/job/Job";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Announcement from "./pages/announcement/Announcement";
import JobAnnouncement from "./pages/jobAnnouncement/JobAnnouncement";
import Canteen from "./pages/canteen/Canteen";

import { Routes, Route } from "react-router-dom";
import Embassy from "./pages/embassy/Embassy";

class App extends React.PureComponent {
  render() {
    return (
      <div className="mt-5">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/flat"} element={<Flat />} />
          <Route path={"/flat/1"} element={<FlatDetail />} />
          <Route path={"/job"} element={<Job />} />
          <Route path={"/embassy"} element={<Embassy />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/announcement"} element={<Announcement />} />
          <Route path={"/jobAnnouncement"} element={<JobAnnouncement />} />
          <Route path={"/canteen"} element={<Canteen />} />
        </Routes>
      </div>
    );
  }
}

export default App;
