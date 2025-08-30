import React from 'react';
import './index.css';
import routes from './router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
