// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import NotesPage from './NotesPage';


import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = (username) => {
    setUser({ username });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <header className="App-header">
                <img src="https://i.imgur.com/a5oA8sX.png" className="App-logo" alt="logo" />
                <p>Click below to start taking notes or log in</p>
                <button className="button" onClick={()=> window.location.href ="/notes"}>New Note</button>
                <div>
                  <button
                    type="button"
                    className="sign-in-buttons"
                    onClick={() => window.location.href = "/login"}
                  >
                    Login
                  </button>
                </div>
              </header>
            </div>
          }
        />
        <Route path="/notes" Component={NotesPage} />
        <Route path="/login" element={<SignIn handleSignIn={handleSignIn} />} />
      </Routes>
    </Router>
  );
}

export default App;

