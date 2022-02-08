import React from "react";
import Home from "./pages/home/Home";
import Flat from "./pages/flat/Flat";
import FlatDetail from "./pages/flat/Detail";
import Job from "./pages/job/Job";
import JobDetail from "./pages/job/Detail";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AddFlat from "./pages/flat/AddFlat";
import JobAdd from "./pages/job/JobAdd";
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
          <Route path={"/flat/:id"} element={<FlatDetail />} />
          <Route path={"/job"} element={<Job />} />
          <Route path={"/job/:id"} element={<JobDetail />} />
          <Route path={"/embassy"} element={<Embassy />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/flat/add"} element={<AddFlat />} />
          <Route path={"/jobAnnouncement"} element={<JobAdd />} />
          <Route path={"/canteen"} element={<Canteen />} />
        </Routes>
      </div>
    );
  }
}

export default App;
