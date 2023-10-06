import React from 'react';

function LoadingComponent() {
    return (
        <div className="flex flex-col items-center justify-center mx-auto ">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
          <div className="mt-4 text-xl font-semibold text-purple-500">Loading...</div>
        </div>
      );
        }

export default LoadingComponent;

