import React, { useState } from "react";
import StockSearch from "./components/StockSearch";
import SentimentCard from "./components/SentimentCard";
import OverallSentiment from "./components/OverallSentiment";
import "./styles.css";

export default function App() {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const BACKEND_URL = "http://127.0.0.1:5000/api/sentiment";

  const fetchSentiment = async (symbol) => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(`${BACKEND_URL}?stock=${symbol}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setStockData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        📊 StockLens - AI Stock Sentiment Dashboard
      </h1>

      <StockSearch onSearch={fetchSentiment} />

      {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      {stockData && (
        <>
          <OverallSentiment summary={stockData.overall_sentiment} symbol={stockData.symbol} />
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {stockData.articles.map((a) => (
              <SentimentCard key={a.id} article={a} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
