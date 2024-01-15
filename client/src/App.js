import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import Home from './Home';
import NotePage from './NotePage';

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = (username) => {
    setUser({ username });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} handleSignIn={handleSignIn} />} />
        <Route path="/note" element={<NotePage user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;