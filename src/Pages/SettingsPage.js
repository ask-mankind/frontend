import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store/users';
import { logoutUser } from '../store/auth';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const user = JSON.parse(localStorage.getItem("ahkUser"))

  const [newUsername, setNewUsername] = useState(user.username);
  const [newFullname, setNewFullname] = useState(user.fullname);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate()


  const dispatch = useDispatch()


  const handleUsernameChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleFullnameChange = (e) => {
    setNewFullname(e.target.value);
  };


  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handleSaveChanges = () => {
    const newUser = {
      fullname:newFullname,
      username:newUsername,
      email:newEmail,
      password:newPassword
    }
     dispatch(updateUser(newUser))
    navigate("/")

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
        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="newFullname">
          New Full Name:
        </label>
        <input
          type="text"
          id="newFullname"
          value={newFullname}
          onChange={handleFullnameChange}
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
