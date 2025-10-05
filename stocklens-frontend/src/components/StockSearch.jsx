import React, { useState } from "react";

export default function StockSearch({ onSearch }) {
  const [symbol, setSymbol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!symbol.trim()) return;
    onSearch(symbol.trim().toUpperCase());
    setSymbol("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-6"
    >
      <input
        type="text"
        placeholder="Enter stock symbol (e.g., INFY)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
      >
        Analyze
      </button>
    </form>
  );
}
