const express = require('express');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require("body-parser");
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let transaction = [];

app.get('/', (req, res) => {
  res.send('Taller challenge - Backend!')
})

app.post('/transaction', (req, res) => {
  const { amount, description } = req.body;
  
  if (!amount || !description) {
    return res.status(400).json({ error: 'amount and description are required' });
  }

  const newTransaction = {
    id: uuidv4(),
    amount,
    description
  }

  transaction.push(newTransaction);
  res.status(201).json({
      message: 'Transaction created successfully',
      data: newTransaction
  });
});

app.get('/transaction', (req, res) => {
    res.json(transaction);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Transaction app listening on port ${port}`);
  });
}

module.exports = app;