import React from 'react';
import './app/Layout/style.css';
import ReactDOM from 'react-dom';
import App from './app/Layout/App';
import 'semantic-ui-css/semantic.min.css';
import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import { createBrowserHistory } from "history";
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { store, StoreContext } from './app/Stores/Store';

export const history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <App />
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
