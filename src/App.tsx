import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import Livestock from './pages/Livestock';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Sidebar farmName="Bluelight Farm" />
        <Header />
        <main className="lg:ml-64 pt-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/livestock" element={<Livestock />} />
            {/* Add other routes as they are implemented */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;