import React from 'react';
import App from './App';

import './styles.css';
import { ContextProvider } from './SocketContext';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>
);