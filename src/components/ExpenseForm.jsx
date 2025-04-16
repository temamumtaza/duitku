import React, { useState } from "react";

const categories = [
  "Makanan",
  "Transportasi",
  "Hiburan",
  "Lainnya",
];

export default function ExpenseForm({ onAdd }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    onAdd({
      name,
      amount: parseInt(amount),
      category,
      date: new Date().toISOString(),
    });
    setName("");
    setAmount("");
    setCategory(categories[0]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-4 mb-4"
    >
      <input
        type="text"
        placeholder="Nama pengeluaran"
        className="rounded-xl p-3 text-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete="off"
      />
      <input
        type="number"
        placeholder="Nominal"
        className="rounded-xl p-3 text-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min={1}
      />
      <select
        className="rounded-xl p-3 text-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-emerald-500 text-white rounded-2xl p-4 text-xl font-bold shadow-lg active:opacity-80 hover:scale-95 transition-all"
      >
        Tambah
      </button>
    </form>
  );
} 