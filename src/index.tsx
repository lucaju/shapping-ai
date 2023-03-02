import '@fontsource/epilogue/400.css';
import '@fontsource/epilogue/600.css';
import '@fontsource/syne/700.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('app');
if (!container) throw new Error(`HTML element id 'app' not found`);

const root = createRoot(container);
root.render(<App />);

// if (module.hot) module.hot.accept();
