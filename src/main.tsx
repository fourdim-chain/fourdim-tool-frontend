import React from 'react'
import ReactDOM from 'react-dom'
import {HelmetProvider} from 'react-helmet-async';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {BrowserRouter} from 'react-router-dom';

import store, {persistor} from "./state";

import './index.css'
import App from './App'
import {SettingsProvider} from "./contexts/SettingsContext";

ReactDOM.render(
    <HelmetProvider>
        <ReduxProvider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <SettingsProvider>
                        <BrowserRouter>
                            <App/>
                        </BrowserRouter>
                    </SettingsProvider>
                </LocalizationProvider>
            </PersistGate>
        </ReduxProvider>
    </HelmetProvider>,
    document.getElementById('root')
)
