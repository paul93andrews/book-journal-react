import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './App.css';

import JournalRouter from './routers/JournalRouter';

const store = configureStore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 'test',
    }
  }
  
  componentDidMount() {
    console.log(store);
  }
  
  componentDidUpdate() {
    
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
