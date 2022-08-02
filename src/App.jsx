import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Form from './Form';

function App() {
  const app = {
    title: 'Petra Praise',
    subtitle: 'The Rock Cries Out!',
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>{app.title}</h1>
        {app.subtitle && <h4>{app.subtitle}</h4>}
      </div>
      <Form />
      <p className="read-the-docs">
        The son of Jesse proves his heart of a hero!
      </p>
    </div>
  );
}

export default App;
