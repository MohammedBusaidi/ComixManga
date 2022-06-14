import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {PayPalScriptProvider} from "@paypal/react-paypal-js"

import App from './App';
import { store, persistor } from './store/store';

import { GlobalStyle } from './global.style';

const rootElement = document.getElementById('root');


render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
        <PayPalScriptProvider >  
            <App />
        </PayPalScriptProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);

//options={{"client-id": proccess.env.REACT_APP_PAYPAL_CLIENT_ID}} 