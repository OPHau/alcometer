import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [sex, setSex] = useState('female');
  const [result, setResult] = useState(0);

  const calculate = () => {
    let liters = bottles * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;

    grams -= burning * hours;

    if(sex === 'female') setResult(grams / (weight * 0.6));
    else setResult(grams / (weight * 0.7));
  }

  return (
    <div>
      <h3>Calculating blood alcohol level</h3>
      <form>
        <div class='form-group'>
          <label>Weight (kg) </label>
          <input class='form-control' type='number' step='1' onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div class='form-group'>
          <label>Bottles (0.33 l)</label>
          <input class='form-control' type='number' step='1' onChange={e => setBottles(e.target.value)}></input>
        </div>
        <div class='form-group'>
          <label value='hours'>Time (hours)</label>
          <input class='form-control' type='number' step='1' onChange={e => setHours(e.target.value)}></input>
        </div>
        <div class='form-group'>
          <label>Sex</label>
          <div class='form-check'>
            <input class='form-check-input' type='radio' name='sex' value='female' defaultChecked onClick={() => setSex('female')}/>
            <label class='form-check-label'>Female</label>
          </div>
          <div class='form-check'>
            <input class='form-check-input' type='radio' name='sex' value='male' onClick={() => setSex('male')}/>
            <label class='form-check-label'>Male</label>
          </div>
        </div>
        <div class='form-group'>
          <label>Blood alcohol content:</label>
          <output class='form-control'>{result.toFixed(1)} ‰</output>
        </div>
        <button type='button' class='btn btn-primary' onClick={calculate}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
