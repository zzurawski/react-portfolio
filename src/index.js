import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root"));
reportWebVitals();

     