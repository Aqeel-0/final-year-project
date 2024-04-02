// App.js
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [result, setResult] = useState(null);

  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data.prediction[0])
      setResult(data.prediction[0]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Machine Learning Prediction</h1>
      <InputForm onSubmit={handleFormSubmit} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
}

export default App;
