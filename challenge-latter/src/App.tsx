import { useState } from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [showData, setShowData] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  } 

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type='number'
        onChange={(e) => setAmount(Number(e?.target?.value))}
        value={amount}/>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}/>
      <button type='submit'>Submit</button>
    </form>
    {showData ? 
    <div>
      <div>{amount}</div>
      <div>{description}</div>
    </div>
    : ''}
    </>
  )
}

export default App
