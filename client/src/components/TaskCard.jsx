import React, { useState } from "react";

const TaskCard = ({ task = {}, onEdit, onDelete }) => {
  const [completed, setCompleted] = useState(task.status === "Completed");

  const toggleCompletion = () => {
    setCompleted(!completed);
  };

  return (
    <div className="max-w-sm rounded-lg border p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-base font-semibold text-gray-800 mb-2 truncate">
        {task.title || "Untitled Task"}
      </h3>
      <p className="text-gray-600 text-xs mb-3 line-clamp-2">
        {task.description || "No description available."}
      </p>
      <p className="text-gray-500 text-xs mb-2">
        <span className="font-medium">Due:</span> {task.dueDate || "N/A"}
      </p>
      <p
        className={`text-xs font-medium mb-2 ${
          completed ? "text-green-500" : "text-red-500"
        }`}
      >
        {completed ? "Completed" : "Pending"}
      </p>
      <div className="flex justify-between items-center">
        <p
          className={`text-xs font-medium ${
            task.priority === "High"
              ? "text-red-600"
              : task.priority === "Medium"
              ? "text-yellow-600"
              : "text-green-600"
          }`}
        >
          {task.priority || "Low"}
        </p>
        <div className="flex gap-2">
          <button onClick={toggleCompletion} className="text-xl">
            <i
              className={`fa-solid fa-star text-sm ${
                completed ? "text-yellow-500" : ""
              }`}
            ></i>
          </button>
          <button
            onClick={() => onEdit(task)}
            className="text-sm text-blue-900 hover:text-blue-500 transition-colors"
          >
            <i className="fa-solid fa-pen"></i>
          </button>
          <button
            onClick={() => onDelete(task._id || task.id)}
            className="text-sm text-red-600 hover:text-red-900 transition-colors"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
