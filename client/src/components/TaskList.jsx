import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onEdit, onDelete, onCreate }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      
      {tasks.map((task) => (
        <TaskCard
          key={task._id || task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
      <div className="flex max-w-sm rounded-lg border-2 border-dashed border-gray-400 p-6 justify-center items-center hover:shadow-lg transition-shadow">
        <button onClick={onCreate}>
          <h3 className="text-sm font-semibold text-gray-600">Create a New Task</h3>
        </button>
      </div>
      
    </div>
  );
};

export default TaskList;
