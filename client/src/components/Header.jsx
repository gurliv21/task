import React from "react";

const Header = ({ userName, onSearch }) => {
  return (
    <header className="flex justify-between p-4 bg-blue-400 text-white shadow-md">
      
      

      
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search tasks..."
          className=" p-2 rounded-lg text-gray-700"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      
      <div className="flex items-center space-x-4">
        <div className="text-sm">
          Welcome, <span className="font-bold">{userName || "User"}</span>!
        </div>
        <img
          src="https://via.placeholder.com/40" // Replace with dynamic user image
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      </div>
    </header>
  );
};

export default Header;
