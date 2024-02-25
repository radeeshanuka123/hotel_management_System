// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import UserInput from './Pages/UserInput';
import './CSS/main.css'; // Import main.css for shared styles

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/user-input" element={<UserInput />} />
        <Route path="/" element={isLoggedIn ? <UserInput /> : <Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
