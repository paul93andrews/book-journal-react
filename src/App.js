import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


import './App.css';

import Search from './Components/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 'test',
    }
  }
  
  componentDidMount() {

  }
  
  componentDidUpdate() {

  }

  render(){
    return (
      <div className="App">
        {/* <Provider store={store}> */}
        <Search />
        {/* {this.fetchBooks('deathly hallows')} */}
        {/* </Provider> */}
      </div>
    );
  } 
}

export default App;
