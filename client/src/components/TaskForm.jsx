import React, { useState } from 'react';

const TaskForm = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { name, description, dueDate, priority, status };
    onSubmit(newTask); // Pass the task data to the parent
    onClose(); // Close the modal
  };

  if (!isOpen) return null; // Don't render if the modal is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-96 p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Create Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Task Name"
            className="input w-full"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task Description"
            className="input w-full"
            rows="3"
            required
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="input w-full"
            required
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="input w-full"
            required
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="input w-full"
            required
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
