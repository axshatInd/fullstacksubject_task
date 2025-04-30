import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Import the home icon
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import ViewMembers from './pages/ViewMembers';
import MemberDetails from './pages/MemberDetails';
import './App.css';

// Header component to handle conditional rendering of the home icon
const Header = () => {
  const location = useLocation();
  return (
    <header className="App-header">
      {location.pathname !== "/" && (
        <Link to="/" className="home-icon-link" aria-label="Home">
          <FaHome size={24} />
        </Link>
      )}
      <h1 className="header-title">Student Team Members Management</h1>
    </header>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-member" element={<AddMember />} />
            <Route path="/view-members" element={<ViewMembers />} />
            <Route path="/member/:id" element={<MemberDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
