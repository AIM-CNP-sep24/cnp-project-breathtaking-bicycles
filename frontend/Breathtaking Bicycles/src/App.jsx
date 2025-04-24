import { useState } from 'react'
import './App.css'
import Textfield from './translate-components/textfield.jsx';

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Textfield />
    </>
  );
}

export default App;
