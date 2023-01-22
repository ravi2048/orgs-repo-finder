import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DataContextProvider from './contexts/dataContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>
);
