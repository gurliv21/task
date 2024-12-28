import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTaskById, updateTask } from '../services/taskService';

const TaskEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({ title: '', description: '', priority: 'Low' });

  useEffect(() => {
    const fetchTask = async () => {
      const taskData = await getTaskById(id);
      setTask(taskData);
    };
    fetchTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(id, task);
    navigate(`/task/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        placeholder="Task Title"
        className="input"
      />
      <textarea
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        placeholder="Task Description"
        className="input"
      />
      <select
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
        className="input"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit" className="btn">Update Task</button>
    </form>
  );
};

export default TaskEditForm;
