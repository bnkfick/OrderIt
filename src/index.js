import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-roouter-dom';

import "./index.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
