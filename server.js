const express = require('express');
const mongoose = require('mongoose');
const Data = require('./models/Data');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Route 
app.get('/api/data', (req, res) => {
    // Fetch data from MongoDB
    // Example: Assuming you have a 'data' collection in your MongoDB
    Data.find({}, (err, Data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(data);
      }
    });
  });
// Get all expenses
app.get('/api/expenses', async (req, res) => {
    try {
      const expenses = await Data.find();
      res.json(expenses);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  // Add a new expense
app.post('/api/expenses', async (req, res) => {
    const { name, amount } = req.body;
  
    if (!name || !amount) {
      return res.status(400).json({ msg: 'Please provide both name and amount for the expense.' });
    }
  
    try {
      const newExpense = new Data({ name, amount });
      await newExpense.save();
      res.json(newExpense);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});