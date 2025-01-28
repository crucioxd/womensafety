import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SOSPage from './pages/SOSPage';
import Navbar from './components/navbar';
function App() {
  return (
    <Router>
      {/* Navbar placed outside Routes to make it visible on all pages */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sos" element={<SOSPage />} />
      </Routes>
    </Router>
  );
}

export default App;