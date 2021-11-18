import React from 'react';
import './App.css';
import RadioLabel from './components/RadioLabel';
import RadioInput from './components/RadioInput';
import RadioDatePicker from './components/RadioDatePicker';
import RadioSelect from './components/RadiosSelect';

function App() {

  return (
    <div className="app">
      <h1>Home Test</h1>
      <p>Name</p>
      <div className="radio-label">
        <RadioLabel label="Radio A"/>
        <RadioLabel label="Radio B"/>
        <RadioLabel label="Radio C"/>
      </div>
      <p>Subcomponent</p>
      <div className="radio-sub">
        <RadioInput />
        <RadioDatePicker />
        <RadioSelect />
      </div>
    </div>
  );
}

export default App;