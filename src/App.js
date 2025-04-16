import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalAmount from "./components/TotalAmount";
import "./index.css";

const STORAGE_KEY = "duitku_expenses";

function getInitialExpenses() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function App() {
  const [expenses, setExpenses] = useState(getInitialExpenses);
  const [editExpense, setEditExpense] = useState(null); // {index, data}

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  }, [expenses]);

  const handleAdd = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const handleEdit = (idx) => {
    setEditExpense({ index: idx, data: expenses[idx] });
  };

  const handleUpdate = (expense) => {
    setExpenses(expenses.map((e, i) => (i === editExpense.index ? { ...expense, date: e.date } : e)));
    setEditExpense(null);
  };

  const handleDelete = (idx) => {
    setExpenses(expenses.filter((_, i) => i !== idx));
    if (editExpense && editExpense.index === idx) setEditExpense(null);
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="min-h-screen bg-emerald-50 flex flex-col items-center" style={{maxWidth:480, margin:'0 auto'}}>
      {/* Header sticky */}
      <div className="w-full px-4 pt-6 pb-2 sticky top-0 z-30 bg-emerald-50">
        <h1 className="text-3xl font-extrabold text-emerald-600 mb-2 text-center tracking-tight">Duitku</h1>
      </div>
      {/* Form sticky */}
      <div className="w-full px-4 sticky top-[64px] z-20 bg-emerald-50 pb-2">
        <ExpenseForm
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          editExpense={editExpense}
          onCancelEdit={() => setEditExpense(null)}
        />
      </div>
      {/* List scrollable */}
      <div className="w-full flex-1 overflow-y-auto px-4 pb-32" style={{maxHeight: 'calc(100vh - 220px)'}}>
        <ExpenseList expenses={expenses} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
      {/* Total fixed */}
      <TotalAmount total={total} />
    </div>
  );
}

export default App;
