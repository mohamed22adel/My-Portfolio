import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Router>
    <App/>
    </Router>
    </div>);