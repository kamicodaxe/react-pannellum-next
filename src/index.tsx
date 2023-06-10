import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';


if (React.version >= "18") {
    const root = createRoot(document.getElementById('root')!);
    root.render(<App />);
} else {
    ReactDOM.render(<App />, document.getElementById('root'));
}