import React from "react";

export default function OverallSentiment({ summary, symbol }) {
  if (!summary) return null;

  const { positive, negative, neutral, overall } = summary;

  const color =
    overall === "Positive"
      ? "text-green-600"
      : overall === "Negative"
      ? "text-red-600"
      : "text-gray-700";

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center mb-4">
      <h2 className="text-xl font-bold mb-2">
        Sentiment Summary for <span className="text-blue-600">{symbol}</span>
      </h2>
      <p className="text-gray-700 mb-2">
        Positive: {positive} | Negative: {negative} | Neutral: {neutral}
      </p>
      <p className={`text-lg font-semibold ${color}`}>
        Overall Sentiment: {overall}
      </p>
    </div>
  );
}
