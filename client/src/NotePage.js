import React from 'react';

function NotePage({ user }) {
  return (
    <div>
      <h2>Take Notes</h2>
      {user ? (
        <p>
          Welcome, {user.username}! Start taking your notes here.
        </p>
      ) : (
        <p>Please sign in to take notes.</p>
      )}
    </div>
  );
}

export default NotePage;
