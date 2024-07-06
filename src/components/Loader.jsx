import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-r-4 border-l-4 border-t-blue-700 border-gray-500"></div>
    </div>
  );
};

export default Loader;
