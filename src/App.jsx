import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Component/Landingpage';
import GeminiComponent from './Component/project';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/design" element={<GeminiComponent />} />
      </Routes>
    </Router>
  );
}

export default App;