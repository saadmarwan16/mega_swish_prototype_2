import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <React.StrictMode>
        <div>
            <h1>This is the real JSX!</h1>
        </div>
    </React.StrictMode>,
    document.getElementById('jsx')
)

ReactDOM.render(
    <React.StrictMode>
        <div>
            <h1>This is another real real JSX!</h1>
        </div>
    </React.StrictMode>,
    document.getElementById('another-jsx')
)