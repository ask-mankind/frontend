import React from 'react';

const UserNotFound = () => {
  return (
    <div className="container mx-auto mt-4 width-auto">
      <h2 className="text-2xl font-semibold mb-4">User Not Found</h2>
      <p className="text-gray-600 mb-4">The requested user does not exist.</p>
      {/* You can add additional content or links here */}
    </div>
  );
};

export default UserNotFound;
