// Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark-bg">
      <h2 className="text-white text-[30px] font-poppins font-bold mb-4">
        Loading...
      </h2>
      <div className="w-[80%] max-w-md h-2 bg-gray-300 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 animate-loadingBar"></div>
      </div>
    </div>
  );
};

export default Loading;
