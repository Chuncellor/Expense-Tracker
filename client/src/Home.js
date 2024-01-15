import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

function Home({ user, handleSignIn }) {
  return (
    <div>
      <h1>Note-Taking App</h1>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <Link to="/note">
            <button>Start Taking Notes</button>
          </Link>
        </div>
      ) : (
        <SignIn handleSignIn={handleSignIn} />
      )}
    </div>
  );
}

export default Home;