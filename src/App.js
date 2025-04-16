import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalAmount from "./components/TotalAmount";
import "./index.css";

const STORAGE_KEY = "duitku_expenses";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) setExpenses(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses]);

  const handleAdd = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center" style={{maxWidth:480, margin:'0 auto'}}>
      <div className="w-full px-4 pt-6 pb-32">
        <h1 className="text-3xl font-extrabold text-emerald-600 mb-4 text-center tracking-tight">Duitku</h1>
        <ExpenseForm onAdd={handleAdd} />
        <ExpenseList expenses={expenses} />
      </div>
      <TotalAmount total={total} />
    </div>
  );
}

export default App;
