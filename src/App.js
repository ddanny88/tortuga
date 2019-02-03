import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import routes from './routes';
import Navigation from './components/Navbar/Navigation';
import Footer from './components/footer/Footer';
import ReactGA from 'react-ga';

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
function initializeReactGA(){
    ReactGA.initialize('UA-133756566-1');
    ReactGA.pageview('/');
}
initializeReactGA();

export default App;



// track events: 
// ReactGA.event({
//   category: 'User',
//   action: 'Create an Account'
// });
