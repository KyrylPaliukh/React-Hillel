import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './Alert';

ReactDOM.render(
    <React.StrictMode>
        <Alert type="warning" text="what is love?" />
    </React.StrictMode>,
    document.getElementById('root')
);
