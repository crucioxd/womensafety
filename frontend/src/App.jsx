import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ComplaintForm from './pages/ComplaintForm';
import Navbar from './components/navbar';
import SOSPage from './pages/SOSPage';


function App() {
  return (
    <Router>
    
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/file-complaint" element={<ComplaintForm />} /> {/* Ensure route matches */}
        <Route path="/live-sos" element={<SOSPage/>}/>
      </Routes>

      
    </Router>
  );
}

export default App;
