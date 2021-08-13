import React from 'react';
import './App.css';

import Navigation from './components/shared/navigation';
import Movies from './components/pages/Movies'

function App() {
  return (
    <div>
      <Navigation />
      <Movies />
    </div>
  );
}

export default App;
