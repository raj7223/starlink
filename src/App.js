import './App.css';
import React from 'react';
// import { FaIconName } from 'react-icons/fa'; 
import GoogleLogo from './components/GoogleLogo';
import SearchBar from './components/SearchBar';
import MenuBar from './components/MenuBar';


function App() {
  return (
    <div className="App">
      <header className='header'>
      <GoogleLogo />
      <SearchBar />
      <MenuBar />

      </header>

    </div>
  );
}

export default App;
