// ProtectedPage.js
import React from 'react';

function ProtectedPage({ username, logout }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to the Protected Page, {username}!</h1>
      <p>Only logged-in users can see this content.</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default ProtectedPage;
