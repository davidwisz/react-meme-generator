import React from 'react';
import './App.css';
import CreateMeme from './MemeForm';
import MemesList from './MemesList';

function App() {
  return (
    <div className="App container">
      <CreateMeme />
      <MemesList />
    </div>
  );
}

export default App;
