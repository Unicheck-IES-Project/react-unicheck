import './App.css';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import subjectsReducer from './reducers/index';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import Register from './components/Register/Register';
import AppLayout from './components/AppLayout/AppLayout';

let store = createStore(
  subjectsReducer,
  applyMiddleware(thunk, reduxPackMiddleware)
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<LoginContainer />} />
            <Route path='/home' element={<Home />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
