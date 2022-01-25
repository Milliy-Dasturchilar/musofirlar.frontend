import React from 'react';
import Home from './pages/home/Home';
import Flat from './pages/flat/Flat';


class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Home />
        <Flat/>
      </div>
    );
  }
}

export default App;
