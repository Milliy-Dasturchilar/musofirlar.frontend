import React from 'react';
import './App.css';
import Home from './components/home/Home'
import Flat from "./components/flat/Flat";


class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
