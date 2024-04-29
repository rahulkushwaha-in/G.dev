import React from "react";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="rounded-full h-20 w-20 border-t-4 border-blue-500 animate-spin"></div>
      <h2 className="mt-4 text-white text-lg font-semibold">Getting Your Learning Path...</h2>
    </div>
  );
};

export default LoadingPage;
