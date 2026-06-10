import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(null);
  const [description, setDescription] = useState("");
  const [showData, setShowData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  } 

  return (
    <div className='app-container'>
      <form onSubmit={handleSubmit} className='form-container'>
        <input
          className='form-input'
          id='amount'
          name='amount'
          type='number'
          onChange={(e) => setAmount(Number(e?.target?.value))}
          value={amount}/>
        <input
          className='form-input'
          id='description'
          name='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
      {showData ? 
      <div>
        <h2>transaction details</h2>
        <div>Amount: {amount}</div>
        <div>Description: {description}</div>
      </div>
      : ''}
    </div>
  )
}

export default App
