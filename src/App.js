import React from 'react';
import './App.css';
import NavigationMenu from './Navigation/NavigationMenu';
import Routes from './Navigation/Routes';

function App() {
  return (
    <div className="App">
      <NavigationMenu/>
      <Routes/>
    </div>
  );
}

export default App;
