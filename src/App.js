import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import UserProfile from './components/userProfile.component'
import UserDetailsProvider from './context/userDetails/userDetails.provider'
import Main from './components/main/main.component'

function App() {
  return (
    <div className="App">
      <UserDetailsProvider >
        <Main />
      </UserDetailsProvider>
      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
    </div>
  );
}

export default App;
