// import React from 'react';       //the react18 way
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App';
const container = document.getElementById('root');
const root = createRoot(container)
root.render(<App tab="home" />)
// ReactDOM.render(<App />, document.getElementById('root'));