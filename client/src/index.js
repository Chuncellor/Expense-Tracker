import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';

function Home({ user, handleSignIn }) {
  return (
    <div>
      <h1>Note-Taking App</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
            <button>Start Taking Notes</button>
        </div>
      ) : (
        <SignIn handleSignIn={handleSignIn} />
      )}
    </div>
  );
}

export default Home;