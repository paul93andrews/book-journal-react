import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore';

import './App.css';

import JournalRouter, { history } from './routers/JournalRouter';
import { startSetBookCatalogue } from './actions/bookCatalogue';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase';

const store = configureStore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 'test',
      loggedInStatus: false,
    }
  }
  
  componentDidMount() {
    this.login();
  }
  
  componentDidUpdate() {
    if (this.state.loggedInStatus === true) {
      store.dispatch(startSetBookCatalogue());
    }
  }

  login() {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.dispatch(login(user.uid));
        this.setState(() => ({ loggedInStatus: true }))
        if (history.location.pathname === '/') {
          history.push('/home');
        }
      } else {
        store.dispatch(logout());
        this.setState(() => ({ loggedInStatus: false }))
        history.push('/');
      }
    });
  }

  render(){
    return (
        <div className="App">
          <Provider store={store}>
            <JournalRouter />
          </Provider>
        </div>
    );
  } 
}

export default App;

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth.uid,
//   }
// };

// export default connect(mapStateToProps, null)(App);
//no need for mapDispatchToProps function here
//the object passed in below sets up the action AND dispatch as props on the component
//connect handles that for us
// export default connect(null, { startSetBookCatalogue })(App);
