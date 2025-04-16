import React from "react";

function formatCurrency(amount) {
  return amount.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
}

export default function TotalAmount({ total }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-white shadow-2xl rounded-t-2xl p-4 flex items-center justify-between text-lg font-bold text-emerald-600" style={{maxWidth: 480, margin: '0 auto'}}>
      <span>Total Pengeluaran</span>
      <span>{formatCurrency(total)}</span>
    </div>
  );
} 