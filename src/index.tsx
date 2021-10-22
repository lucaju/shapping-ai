import '@fontsource/epilogue/400.css';
import '@fontsource/epilogue/600.css';
import '@fontsource/syne/700.css';
import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App />, document.querySelector('#app'));

if (module.hot) module.hot.accept();
