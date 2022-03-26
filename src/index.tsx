// i18n
import './locales/i18n';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import React from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { BrowserRouter } from 'react-router-dom';
import { SettingsProvider } from "./contexts/SettingsContext";
import { WagmiProvider } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'
import store, { persistor } from "./state";

import App from './App'

import './index.css';
import { Chains } from "./constants/chains";

const connectors = () => [
        new InjectedConnector({
            chains: Chains,
            options: { shimDisconnect: true },
        }),
        new WalletConnectConnector({ chains: Chains, options: { qrcode: true } }),
        new WalletLinkConnector({
            chains: Chains,
            options: {
                appName: 'My wagmi app',
            },
        }),
    ]

ReactDOM.render(
    <WagmiProvider autoConnect connectors={connectors}>
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
