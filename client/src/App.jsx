import { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

export default function App() {
  const [output, setOutput] = useState('');

  const runPythonScript = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/run-script');
      setOutput(response.data.output);
    } catch (error) {
      setOutput('Error running script');
    }
  };

  return (
    <div className="container">
      <button className="button" onClick={runPythonScript}>
        Run Python Script
      </button>
      <pre className="output-box">
        {output ? <span>our output : <h4>{output}</h4></span> :'Click the button to run the script'}
      </pre>
    </div>
  );
}
