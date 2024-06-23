import React from "react";

const FristLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex space-x-2">
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-green-500 rounded-full animate-bounce200"></div>
        <div className="w-6 h-6 bg-red-500 rounded-full animate-bounce400"></div>
      </div>
    </div>
  );
};

export default FristLoading;
