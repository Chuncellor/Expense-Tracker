// Note.js
import React from 'react';

const Note = ({ title, content }) => (
  <div className="note">
    <h3>note</h3>
    <p>{content}</p>
  </div>
);

export default Note