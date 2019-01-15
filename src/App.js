import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import routes from './routes';
import Navigation from './components/Navbar/Navigation';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navigation />
          {routes}
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
