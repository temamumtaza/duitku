import React from "react";

function formatCurrency(amount) {
  return amount.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function ExpenseList({ expenses, onEdit, onDelete }) {
  if (!expenses.length) {
    return (
      <div className="text-center text-gray-400 py-8">Belum ada pengeluaran</div>
    );
  }
  return (
    <div className="flex flex-col gap-3 pb-24">
      {expenses.map((item, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-between gap-3 animate-fadeIn"
        >
          <div>
            <div className="font-semibold text-lg text-gray-800">{item.name}</div>
            <div className="text-xs text-gray-400 mt-1">{formatDate(item.date)}</div>
            <div className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-emerald-50 text-emerald-600 font-medium">
              {item.category}
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="text-xl font-bold text-emerald-500">
              {formatCurrency(item.amount)}
            </div>
            <div className="flex gap-2 mt-2">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-white rounded-xl px-3 py-1 text-sm font-bold shadow active:opacity-80"
                onClick={() => onEdit(idx)}
                aria-label="Edit"
              >
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white rounded-xl px-3 py-1 text-sm font-bold shadow active:opacity-80"
                onClick={() => onDelete(idx)}
                aria-label="Hapus"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 