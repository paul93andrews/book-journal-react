import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import configureStore from './store/configureStore';

import './App.css';

import JournalRouter from './routers/JournalRouter';
import { startSetBookCatalogue } from './actions/bookCatalogue';

const store = configureStore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 'test',
    }
  }
  
  componentDidMount() {
    store.dispatch(startSetBookCatalogue());
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

//no need for mapDispatchToProps function here
//the object passed in below sets up the action AND dispatch as props on the component
//connect handles that for us
// export default connect(null, { startSetBookCatalogue })(App);
