import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import NoMatch from "./pages/NoMatch";
import './App.css'
import Counter from './pages/Counter';
import RealTimeInput from './pages/RealTimeInput';
import QuoteGenerator from './pages/QuoteGenerator';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="counter" element={<Counter />} />
          <Route path="rtinput" element={<RealTimeInput />} />
          <Route path="quotes" element={<QuoteGenerator />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
