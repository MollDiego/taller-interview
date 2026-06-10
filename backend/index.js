const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/transaction', (req, res) => {
  const { amount, description } = req.body;
  console.log(req.body)
    
    if (!amount || !description) {
        return res.status(400).json({ error: 'amount and description are required' });
    }

    // Process the data (e.g., save to a database)
    res.status(201).json({
        message: 'User created successfully',
        data: { amount, description }
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})