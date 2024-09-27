import { useState, useEffect } from 'react'
import './App.css'
import apiHelper from "./utils/apiHelper";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

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
 <>
 <Router>
  <Routes>
    <Route path="/" element={<Home />}/>
  </Routes>
 </Router>
 </>
  );
}

export default App
