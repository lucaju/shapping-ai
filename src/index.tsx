import '@fontsource/epilogue/400.css';
import '@fontsource/epilogue/600.css';
import '@fontsource/syne/700.css';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { config } from './overmind';

const overmind = createOvermind(config, {
  devtools: true, // defaults to 'localhost:3031'
  logProxies: true,
});

render(
  <Provider value={overmind}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app')
);

if (module.hot) module.hot.accept();
