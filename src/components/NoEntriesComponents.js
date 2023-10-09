import React from 'react';

function NoEntriesComponent() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-orange-300  text-white rounded-full p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h2 className="text-3xl font-semibold text-black mt-6">
        User hasn't posted any entry
      </h2>
      <p className="text-gray-600 text-lg mt-2">
        It looks like this user hasn't shared any entries yet.
      </p>
    </div>
  );
}

export default NoEntriesComponent;
