import React from 'react';
import './App.css';
import { Form } from './components';

function App() {
  const app = {
    title: 'Petra Praise',
    subtitle: 'The Rock Cries Out!',
  };

  return (
    <div className="App">
      <div>
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
