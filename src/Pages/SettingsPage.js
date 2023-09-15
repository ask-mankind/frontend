import React, { useState } from 'react';

const SettingsPage = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleSaveChanges = () => {
    // Implement logic to save changes to the server or Redux state
    // You can dispatch an action to update user information
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="newUsername">
          New Username:
        </label>
        <input
          type="text"
          id="newUsername"
          value={newUsername}
          onChange={handleUsernameChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
          New Password:
        </label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={handlePasswordChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="newEmail">
          New Email:
        </label>
        <input
          type="email"
          id="newEmail"
          value={newEmail}
          onChange={handleEmailChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        onClick={handleSaveChanges}
        className="bg-lilac hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
      >
        Save Changes
      </button>
    </div>
  );
};

export default SettingsPage;
