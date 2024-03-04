import React from 'react';
import ReactDOM from 'react-dom';
import Progress from './Progress';

ReactDOM.render(
    <React.StrictMode>
        <Progress percentage={40} />
    </React.StrictMode>,
    document.getElementById('root')
);
