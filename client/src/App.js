import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [setData] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: '', amount: '' });

  useEffect(() => {
    // Fetch data from your backend API
    axios.get('/api/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  },);

  useEffect(() => {
    // Fetch all expenses
    axios.get('/api/expenses')
      .then(response => setExpenses(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddExpense = () => {
    // Add a new expense
    axios.post('/api/expenses', newExpense)
      .then(response => {
        setExpenses([...expenses, response.data]);
        setNewExpense({ name: '', amount: '' });
      })
      .catch(error => console.error(error));
  };

   return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div>
        <input
          type="text"
          placeholder="Expense Name"
          value={newExpense.name}
          onChange={(e) => setNewExpense({ ...newExpense, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Expense Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        />
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id}>
            {expense.name} - ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;