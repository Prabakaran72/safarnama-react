import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import ResponsiveLayout from './components/Layout';
import { AuthProvider, useAuth } from './components/Auth/AuthProvider';

interface DataType {
  // Define the shape of your data here
  // Example:
  id: number;
  name: string;
  // Add more fields as needed
}

function App() {
  const [data, setData] = useState<DataType | null>(null);
  const [error, setError] = useState<string | null>(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await apiHelper.get('user'); // replace 'your-endpoint' with your actual endpoint
  //       setData(result);
  //     } catch (err ) {
  //       setError(err instanceof Error ? err.message : 'An unknown error occurred');
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ResponsiveLayout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App
