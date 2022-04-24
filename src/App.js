import './App.css';
import Home from './components/Home/Home';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
//import { createStore, applyMiddleware } from 'redux'
// import { middleware as reduxPackMiddleware } from 'redux-pack'
// import thunk from 'redux-thunk'
import subjectsReducer from './reducers/index'

let store = createStore(subjectsReducer)

function App() {
  return (
    
    <Provider store = {store}>
      <Home />
    </Provider>
    
  );
}

export default App;
