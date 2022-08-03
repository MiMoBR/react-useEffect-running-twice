import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const effectRan = useRef(false)

  useEffect(() => {
    console.log('effect ran')

    if (effectRan.current === true || process.env.NODE_ENV !== 'development') {
      const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json()
        console.log(json)
      }

      fetchUsers()
    }
    return () => {
      console.log('unmounted')
      effectRan.current = true
    }
  }, [])

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
