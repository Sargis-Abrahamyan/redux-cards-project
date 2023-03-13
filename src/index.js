import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { AppProvider } from './context/context';
//App components
import App from './Components/App/App';
// css
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AppProvider>
            <App />
        </AppProvider>
    </Provider>
);


