import './App.css';
import Home from './components/Home/Home';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import thunk from 'redux-thunk';
import subjectsReducer from './reducers/index';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

let store = createStore(subjectsReducer, applyMiddleware(thunk, reduxPackMiddleware));

function App() {
  return (
    <Provider store = {store}>
        <Router>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    </Provider>
    
  );
}

export default App;
