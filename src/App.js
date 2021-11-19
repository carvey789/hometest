import React from 'react';
import './App.css';
import RadioLabel from './components/RadioLabel';
import RadioInput from './components/RadioInput';
import RadioDatePicker from './components/RadioDatePicker';
import RadioSelect from './components/RadiosSelect';

function App() {
  const labels = ["Radio A", "Radio B", "Radio C"]
  return (
    <div className="app">
      <h1>Home Test</h1>
      <p>Name</p>
      <div className="radio-label">
        {
          labels.map((label) => {
            return <RadioLabel label={label}/>
          })
        }
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