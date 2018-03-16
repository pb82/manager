import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';

class Navigator extends Component {
  render() {
    return (
      <Router navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav
      })}/>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(Navigator);

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBx4op3RZb3Epn_I43AaUetFGYpMPUKW_k",
      authDomain: "manager-e8482.firebaseapp.com",
      databaseURL: "https://manager-e8482.firebaseio.com",
      projectId: "manager-e8482",
      storageBucket: "",
      messagingSenderId: "569491966284"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}

export default App;