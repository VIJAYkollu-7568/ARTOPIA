import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage.jsx';
import ArtistDashboard from './components/ArtistDashboard.jsx';
import CustomerDashboard from './components/CustomerDashboard.jsx';
import './App.css';

function App() {
  return (
    <Router>      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/artist-dashboard" element={<ArtistDashboard />} />
        <Route path="/customer-dashboard" element={<CustomerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
