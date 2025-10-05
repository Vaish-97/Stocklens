import React from "react";

export default function SentimentCard({ article }) {
  const sentimentColor =
    article.sentiment === "Positive"
      ? "text-green-600"
      : article.sentiment === "Negative"
      ? "text-red-600"
      : "text-gray-600";

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2">{article.headline}</h3>
      <p className="text-sm text-gray-700 mb-3">{article.summary}</p>
      <div className="flex justify-between items-center text-sm">
        <span className={`${sentimentColor} font-medium`}>
          {article.sentiment} ({article.score})
        </span>
        <span className="text-gray-400">ID: {article.id}</span>
      </div>
    </div>
  );
}
