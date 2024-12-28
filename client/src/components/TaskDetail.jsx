import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../services/taskService';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const taskData = await getTaskById(id);
      setTask(taskData);
    };
    fetchTask();
  }, [id]);

  return task ? (
    <div className="task-detail">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default TaskDetail;
