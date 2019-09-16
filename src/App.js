import React from 'react';
import './App.css';
// import Home from './Container/Home/Home'
// import About from './Container/About/About'
// import Contact from './Container/Contact/Contact';
import { Provider } from 'react-redux'
import store from './Redux'
import Router from './Config/Router/Router'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router />
        </Provider>
      </div>
    );
  }
}

export default App;
