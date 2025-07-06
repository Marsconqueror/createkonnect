import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CreatorDashboard from './components/CreatorDashboard';
import CompanyDashboard from './components/CompanyDashboard';
import Marketplace from './components/Marketplace';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';

function AppRoutes() {
  const [userType, setUserType] = React.useState<'creator' | 'company' | null>(null);
  const [currentView, setCurrentView] = React.useState<'landing' | 'creator' | 'company' | 'marketplace'>('landing');
  const location = useLocation();

  const handleViewChange = (view: 'landing' | 'creator' | 'company' | 'marketplace') => {
    setCurrentView(view);
  };

  const handleUserTypeSelect = (type: 'creator' | 'company') => {
    setUserType(type);
    setCurrentView(type);
  };

  const showNavbar = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-gray-50">
      {showNavbar && (
        <Navbar 
          userType={userType} 
          onViewChange={handleViewChange}
          currentView={currentView}
        />
      )}
      <Routes>
        <Route path="/" element={<LandingPage onUserTypeSelect={handleUserTypeSelect} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/creator" element={<CreatorDashboard />} />
        <Route path="/company" element={<CompanyDashboard />} />
        <Route path="/marketplace" element={<Marketplace userType={userType} />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;