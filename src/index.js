import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommonStyle from './CommonStyle';
import { BrowserRouter } from 'react-router-dom';
import { CountProvider } from './components/Layout/Components/CountContext/CountContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CommonStyle>
        <BrowserRouter>
            <CountProvider>
                <App />
            </CountProvider>
        </BrowserRouter>
    </CommonStyle>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
