import React from 'react';

const TaskPriority = ({ priority }) => {
  const priorityStyles = {
    Low: 'bg-green-500',
    Medium: 'bg-yellow-500',
    High: 'bg-red-500',
  };

  return <span className={`px-2 py-1 rounded ${priorityStyles[priority]}`}>{priority}</span>;
};

export default TaskPriority;
