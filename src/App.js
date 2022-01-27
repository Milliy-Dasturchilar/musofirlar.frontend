import React from "react";
import Home from "./pages/home/Home";
import Flat from "./pages/flat/Flat";
import Job from "./pages/job/Job"

import { Routes, Route } from "react-router-dom";

class App extends React.PureComponent {
  render() {
    return (
      <div className="mt-5">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/flat"} element={<Flat />} />
          <Route path={"/job"} element={<Job />} />
        </Routes>
      </div>
    );
  }
}

export default App;
