import React from 'react'
import ReactDOM from 'react-dom'
import {HelmetProvider} from 'react-helmet-async';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {BrowserRouter} from 'react-router-dom';
import {SettingsProvider} from "./contexts/SettingsContext";
import { WagmiProvider } from 'wagmi';
import store, {persistor} from "./state";
import {providers} from "ethers";

import App from './App'

import './index.css';

const provider = providers.getDefaultProvider(
    "https://bsc-dataseed1.defibit.io"
);

ReactDOM.render(
    <WagmiProvider autoConnect provider={provider}>
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
        </HelmetProvider>
    </WagmiProvider>,
    document.getElementById('root')
)
