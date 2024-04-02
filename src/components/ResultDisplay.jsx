// ResultDisplay.js
import React from 'react';

function ResultDisplay({ result }) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-2">Prediction Result</h2>
      <div>
        <p>{result === 1 ? (
          <p>Present Tomorrow</p>
        ) : (
          <p>Not Present Tomorrow</p>
        )}</p>
      </div>
    </div>
  );
}

export default ResultDisplay;
