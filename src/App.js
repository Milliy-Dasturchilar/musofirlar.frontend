import React from 'react';
import Home from './pages/home/Home';
import Flat from './pages/flat/Flat';
import { Routes, Route } from "react-router-dom";


class App extends React.PureComponent {
  render() {
    return (
      <div className="mt-5">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/flat"} element={<Flat />} />
        </Routes>
      </div>
    );
  }
}

export default App;
